import { CodeBlock } from "../_components/CodeBlock";
import { ConceptSection } from "../_components/ConceptSection";
import { snippet } from "./code";
import { Demo } from "./Demo";

export default function Page() {
  return (
    <ConceptSection
      title="Client Components と useState"
      explanation={
        <>
          <p>
            Next.js の App Router では、コンポーネントは既定で Server Component
            として扱われる。ボタンのクリックなど、ブラウザ側で
            発生するイベントに応答して画面を書き換えたい場合は、 ファイル先頭に{" "}
            <code>&quot;use client&quot;</code> を宣言して Client Component
            にする必要がある。
          </p>
          <p>
            Client Component の中では <code>useState</code>{" "}
            を使って「今どの状態か」を保持できる。 じゃんけんアプリでも、
            グー・チョキ・パーのボタンを押したときに選択中の手を切り替える
            （Phase 1-3）には、同じ仕組みを使う。
          </p>
          <p>
            ボタンの <code>onClick</code> ハンドラで <code>setState</code>{" "}
            系の関数を呼ぶと、Reactが再レンダリングを行い、
            最新の状態に応じた見た目に更新される。
          </p>
        </>
      }
      demo={
        <>
          <CodeBlock code={snippet} />
          <Demo />
        </>
      }
    />
  );
}
