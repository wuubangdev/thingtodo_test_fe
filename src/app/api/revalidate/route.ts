import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = [process.env.NEXT_PUBLIC_ADMIN_URL, "http://localhost:5173"];

// Hàm xử lý CORS header
function setCorsHeaders(response: NextResponse, origin: string | null): NextResponse {
    if (origin && allowedOrigins.includes(origin)) {
        response.headers.set("Access-Control-Allow-Origin", origin);
    } else {
        response.headers.set("Access-Control-Allow-Origin", "null");
    }
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
}

// Hàm xử lý OPTIONS request (preflight)
export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
    const origin = request.headers.get("origin");
    const response = new NextResponse(null, { status: 204 });
    return setCorsHeaders(response, origin);
}

// Xử lý POST request
export async function POST(request: NextRequest): Promise<NextResponse> {
    const origin = request.headers.get("origin"); // Lấy Origin từ header
    const secret = request.nextUrl.searchParams.get("secret");
    const tag = request.nextUrl.searchParams.get("tag");

    // Kiểm tra `secret`
    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Invalid secret!" }, { status: 401 });
    }

    // Kiểm tra `tag`
    if (!tag) {
        return NextResponse.json({ message: "Missing tag" }, { status: 400 });
    }

    revalidateTag(tag);

    const response = NextResponse.json({ revalidate: true, now: Date.now() });
    return setCorsHeaders(response, origin);
}
