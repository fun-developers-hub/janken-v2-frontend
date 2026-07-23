import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tips | janken-v2",
  description: "開発フェーズごとに登場する技術概念の説明と実装例",
};

export default function TipsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tips</h1>
        <Link href="/" className="text-newblue underline">
          じゃんけんアプリへ戻る
        </Link>
      </header>
      {children}
    </div>
  );
}
