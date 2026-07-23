import { NextResponse } from "next/server";

type SwaggerDoc = {
  paths: Record<string, Record<string, { summary?: string }>>;
};

export async function GET() {
  try {
    const res = await fetch("https://janken.ma41.net/swagger/doc.json", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`swagger doc.json returned ${res.status}`);
    }
    const doc: SwaggerDoc = await res.json();

    const endpoints = Object.entries(doc.paths).flatMap(([path, methods]) =>
      Object.entries(methods).map(([method, operation]) => ({
        method: method.toUpperCase(),
        path,
        summary: operation.summary ?? "",
      })),
    );

    return NextResponse.json({ endpoints });
  } catch {
    return NextResponse.json(
      { message: "バックエンドに接続できませんでした" },
      { status: 502 },
    );
  }
}
