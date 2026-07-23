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
    <html className={\`\${geistSans.variable} \${geistMono.variable}\`}>
      <body>{children}</body>
    </html>
  );
}
`;

export const demoSnippet = `"use client";

import { useState } from "react";

export function Demo() {
  const [useMono, setUseMono] = useState(false);

  return (
    <div>
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
