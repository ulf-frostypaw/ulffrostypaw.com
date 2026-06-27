export const prerender = false;

const TELEGRAM_API_BASE = "https://api.telegram.org";

interface TelegramGetFileResponse {
    result?: {
        file_path?: string;
    };
}

function getContentType(filePath: string, upstreamType: string | null): string {
    if (upstreamType) {
        return upstreamType;
    }

    if (filePath.endsWith(".webp")) {
        return "image/webp";
    }

    if (filePath.endsWith(".webm")) {
        return "video/webm";
    }

    if (filePath.endsWith(".tgs")) {
        return "application/x-tgsticker";
    }

    if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) {
        return "image/jpeg";
    }

    if (filePath.endsWith(".png")) {
        return "image/png";
    }

    return "application/octet-stream";
}

export async function GET({ request }: { request: Request }) {
    const token = import.meta.env.TELEGRAM_BOT_TOKEN;

    if (!token) {
        return new Response("Missing TELEGRAM_BOT_TOKEN", { status: 500 });
    }

    const url = new URL(request.url);
    const fileId = url.searchParams.get("file_id");

    if (!fileId) {
        return new Response("Missing file_id", { status: 400 });
    }

    const getFileResponse = await fetch(
        `${TELEGRAM_API_BASE}/bot${token}/getFile?file_id=${encodeURIComponent(fileId)}`,
    );

    if (!getFileResponse.ok) {
        return new Response("Unable to resolve Telegram file", {
            status: getFileResponse.status,
        });
    }

    const fileData: TelegramGetFileResponse = await getFileResponse.json();
    const filePath = fileData.result?.file_path;

    if (!filePath) {
        return new Response("Telegram file path not found", { status: 404 });
    }

    const assetResponse = await fetch(
        `${TELEGRAM_API_BASE}/file/bot${token}/${filePath}`,
    );

    if (!assetResponse.ok || !assetResponse.body) {
        return new Response("Unable to fetch Telegram asset", {
            status: assetResponse.status || 502,
        });
    }

    return new Response(assetResponse.body, {
        status: 200,
        headers: {
            "content-type": getContentType(
                filePath,
                assetResponse.headers.get("content-type"),
            ),
            "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
        },
    });
}
