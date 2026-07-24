export const layoutSnippet = `// src/app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";

// next/font の呼び出しはモジュールスコープでのみ有効。
// クライアントコンポーネント内やイベントハンドラの中では呼び出せない。
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    // .variable を className に付けることで、
    // --font-geist-sans / --font-geist-mono というCSS変数が使えるようになる
    <html className={\`\${geistSans.variable} \${geistMono.variable}\`}>
      <body>{children}</body>
    </html>
  );
}
`;

export const otherFontSnippet = `// Geist / Geist_Mono 以外にも、Google Fontsに
// 用意されている書体は同じ書き方でインポートできる
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});
`;

export const globalsCssSnippet = `/* src/app/globals.css（現状） */
@theme inline {
  /* font-sans / font-mono というTailwindユーティリティが、
     layout.tsxで読み込んだGeistフォントを指すように紐付けている */
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  /* ここが Arial 等に固定されているため、
     layout.tsxでフォントを読み込むだけでは実際には反映されない */
  font-family: Arial, Helvetica, sans-serif;
}
`;

export const demoSnippet = `"use client";

import { useState } from "react";

export function Demo() {
  const [useMono, setUseMono] = useState(false);

  return (
    <div>
      {/* font-sans / font-mono クラスを付けた要素だけ、
          読み込み済みのGeistフォントが適用される */}
      <p className={useMono ? "font-mono" : "font-sans"}>
        TriGonFight - じゃんけん勝負！
      </p>
      <button onClick={() => setUseMono(v => !v)}>
        フォントを切り替え
      </button>
    </div>
  );
}
`;
