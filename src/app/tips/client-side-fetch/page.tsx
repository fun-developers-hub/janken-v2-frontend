import { CodeBlock } from "../_components/CodeBlock";
import { TabSwitcher } from "../_components/TabSwitcher";
import { snippet } from "./code";
import { Demo } from "./Demo";

export default function Page() {
  return (
    <article>
      <h2 className="mb-4 text-2xl font-bold">
        fetch によるクライアントサイド取得
      </h2>
      <TabSwitcher
        tabs={[
          {
            id: "explanation",
            label: "説明",
            content: (
              <div className="flex flex-col gap-3 text-sm leading-relaxed">
                <p>
                  Client Component からAPIを呼び出すときは、
                  「今どういう状態か」を <code>idle</code>/<code>loading</code>/
                  <code>success</code>/<code>error</code>{" "}
                  のような文字列で保持しておくと、
                  読み込み中の表示やエラー表示を素直に出し分けられる。
                </p>
                <p>
                  <code>try/catch/finally</code> を使い、リクエスト開始時に{" "}
                  <code>loading</code>
                  へ、成功したら <code>success</code>
                  へ、失敗したら <code>error</code>{" "}
                  へ状態を遷移させる。レスポンスが200番台でなくても{" "}
                  <code>fetch</code>自体は例外を投げないため、
                  <code>res.ok</code>{" "}
                  を確認して自分でエラーとして扱う必要がある。
                </p>
                <p>
                  下のデモでは、前の「Route Handler
                  で作るAPIモック」で実装したエンドポイントを再利用し、
                  正常なリクエストとエラーになるリクエストの両方を試せる。
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
