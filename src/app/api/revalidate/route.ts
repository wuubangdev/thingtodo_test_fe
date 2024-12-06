import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = [process.env.NEXT_PUBLIC_ADMIN_URL]; // Danh sách các domain được phép

// Hàm xử lý CORS header
function setCorsHeaders(response: NextResponse): NextResponse {
    response.headers.set('Access-Control-Allow-Origin', allowedOrigins[0]!); //
    response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
}

// Hàm xử lý OPTIONS request (preflight)
export async function OPTIONS(): Promise<NextResponse> {
    const response = new NextResponse(null, { status: 204 });
    return setCorsHeaders(response);
}

// Xử lý POST request
export async function POST(request: NextRequest): Promise<NextResponse> {
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
    return setCorsHeaders(response);
}
