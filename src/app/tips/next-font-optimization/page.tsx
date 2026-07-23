import { CodeBlock } from "../_components/CodeBlock";
import { ConceptSection } from "../_components/ConceptSection";
import { demoSnippet, globalsCssSnippet, layoutSnippet } from "./code";
import { Demo } from "./Demo";

export default function Page() {
  return (
    <ConceptSection
      title="next/font でのフォント設定"
      explanation={
        <>
          <p>
            <code>next/font/google</code>{" "}
            は、フォントを読み込みたいファイル（このプロジェクトでは{" "}
            <code>src/app/layout.tsx</code>）のモジュールスコープで関数を呼び出し、
            <code>variable</code>{" "}
            オプションでCSS変数名を指定して使う。その戻り値の{" "}
            <code>.variable</code> を <code>html</code> タグの{" "}
            <code>className</code>{" "}
            に含めることで、そのCSS変数（例:{" "}
            <code>--font-geist-sans</code>）がページ全体で使えるようになる。
          </p>
          <p>
            ただし、この状態はまだ「フォントを読み込んで、CSS変数として
            用意した」だけで、実際に画面のテキストに適用されるわけではない。
            適用するには、そのCSS変数を実際に <code>font-family</code>{" "}
            として使う設定が別途必要になる。
          </p>
          <p>
            現状の <code>src/app/globals.css</code>{" "}
            では、<code>@theme inline</code> でTailwindの{" "}
            <code>font-sans</code>/<code>font-mono</code>{" "}
            ユーティリティが読み込み済みのフォント変数を指すように紐付けられている。
            しかし <code>body</code> の <code>font-family</code> は{" "}
            <code>Arial, Helvetica, sans-serif</code>{" "}
            のまま固定されており、かつ現状どの要素にも <code>font-sans</code>/
            <code>font-mono</code>{" "}
            クラスが付いていないため、読み込んだフォントはまだどこにも適用されていない。
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
          <CodeBlock code={globalsCssSnippet} lang="css" />
          <CodeBlock code={demoSnippet} />
          <Demo />
        </>
      }
    />
  );
}
