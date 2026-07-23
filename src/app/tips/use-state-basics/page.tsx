import { CodeBlock } from "../_components/CodeBlock";
import { TabSwitcher } from "../_components/TabSwitcher";
import { snippet } from "./code";
import { Demo } from "./Demo";

export default function Page() {
  return (
    <article>
      <h2 className="mb-4 text-2xl font-bold">Client Components と useState</h2>
      <TabSwitcher
        tabs={[
          {
            id: "explanation",
            label: "説明",
            content: (
              <div className="flex flex-col gap-3 text-sm leading-relaxed">
                <p>
                  Next.js の App Router では、コンポーネントは既定で Server
                  Component として扱われる。ボタンのクリックなど、ブラウザ側で
                  発生するイベントに応答して画面を書き換えたい場合は、
                  ファイル先頭に <code>&quot;use client&quot;</code> を宣言して
                  Client Component にする必要がある。
                </p>
                <p>
                  Client Component の中では <code>useState</code>{" "}
                  を使って「今どの状態か」を保持できる。
                  じゃんけんアプリでも、グー・チョキ・パーのボタンを押したときに
                  選択中の手を切り替える（Phase 1-3）には、同じ仕組みを使う。
                </p>
                <p>
                  ボタンの <code>onClick</code> ハンドラで <code>setState</code>{" "}
                  系の関数を呼ぶと、Reactが再レンダリングを行い、
                  最新の状態に応じた見た目に更新される。
                </p>
              </div>
            ),
          },
          {
            id: "demo",
            label: "実装例",
            content: (
              <div className="flex flex-col gap-4">
                <CodeBlock code={snippet} />
                <Demo />
              </div>
            ),
          },
        ]}
      />
    </article>
  );
}
