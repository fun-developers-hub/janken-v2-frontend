import { CodeBlock } from "../_components/CodeBlock";
import { ConceptSection } from "../_components/ConceptSection";
import { demoSnippet, layoutSnippet } from "./code";
import { Demo } from "./Demo";

export default function Page() {
  return (
    <ConceptSection
      title="next/font によるフォント最適化"
      explanation={
        <>
          <p>
            <code>next/font/google</code> はGoogle Fontsをビルド時に
            ダウンロードし、自分のドメインからセルフホストする仕組み。
            ブラウザが外部のフォントサーバーへリクエストしないため、
            読み込み待ちによるレイアウトのガタつき（CLS）を防げる。
          </p>
          <p>
            このプロジェクトでは <code>src/app/layout.tsx</code> で{" "}
            <code>Geist</code> と <code>Geist_Mono</code> を読み込み、それぞれ{" "}
            <code>--font-geist-sans</code> / <code>--font-geist-mono</code>{" "}
            というCSS変数として
            <code>html</code> タグに適用している。
          </p>
          <p>
            重要な制約として、<code>next/font</code>{" "}
            の関数呼び出しはモジュールスコープでのみ有効で、 Client
            Component内やイベントハンドラの中で動的に呼び出すことはできない。
            フォントを切り替えたい場合は、あらかじめ読み込んでおいた
            複数のフォント変数をCSSクラスで出し分ける。
          </p>
          <p>
            参考:{" "}
            <a
              href="https://nextjs.org/docs/app/getting-started/fonts"
              className="text-newblue underline">
              Next.js Fonts ドキュメント
            </a>
          </p>
        </>
      }
      demo={
        <>
          <CodeBlock code={layoutSnippet} />
          <CodeBlock code={demoSnippet} />
          <Demo />
        </>
      }
    />
  );
}
