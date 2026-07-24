import type { Metadata } from "next";
import { Geist, Geist_Mono, DotGothic16, Jersey_15} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dotGothic16 = DotGothic16({
  weight: "400",
  variable: "--font-dotgothic16",
  subsets: ['latin'],
});

const jersey_15 = Jersey_15({
  weight: "400",
  variable: "--font-jersey_15",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "janken-v2",
  description: "A unique janken game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${dotGothic16.variable} ${jersey_15.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <main className="h-screen">{children}</main>
      </body>
    </html>
  );
}
