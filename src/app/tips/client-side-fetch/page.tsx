import { CodeBlock } from "../_components/CodeBlock";
import { ConceptSection } from "../_components/ConceptSection";
import { demoSnippet, hookSnippet } from "./code";
import { Demo } from "./Demo";

export default function Page() {
  return (
    <ConceptSection
      title="fetch によるクライアントサイド取得"
      explanation={
        <>
          <p>
            実バックエンド（<code>https://janken.ma41.net</code>）が
            どんなAPIを持っているかは、
            <a
              href="https://janken.ma41.net/swagger/index.html"
              className="text-newblue underline">
              Swagger UI
            </a>
            を眺めてみると分かる。パスやリクエスト/レスポンスの形が
            一覧できるので、fetchを書く前に一度見ておくとよい。
          </p>
          <p>
            Client Component からAPIを呼び出すときは、 「今どういう状態か」を{" "}
            <code>idle</code>/<code>loading</code>/<code>success</code>/
            <code>error</code> のような文字列で保持しておくと、
            読み込み中の表示やエラー表示を素直に出し分けられる。
          </p>
          <p>
            <code>try/catch/finally</code> を使い、リクエスト開始時に{" "}
            <code>loading</code>
            へ、成功したら <code>success</code>
            へ、失敗したら <code>error</code>{" "}
            へ状態を遷移させる。レスポンスが200番台でなくても <code>fetch</code>
            自体は例外を投げないため、
            <code>res.ok</code> を確認して自分でエラーとして扱う必要がある。
          </p>
          <p>
            下のデモでは、実バックエンド（
            <code>https://janken.ma41.net</code>）の <code>POST /janken</code>{" "}
            を直接呼び出し、正常なリクエストとエラーになるリクエストの
            両方を試せる。
          </p>
          <p>
            <code>status</code>/<code>message</code> の管理とfetch処理は、
            <code>useJankenFetch</code>{" "}
            というカスタムフックに抽出している。こうすると <code>Demo</code>{" "}
            コンポーネント側は「フックを呼んで、
            返ってきた値を表示する」だけになり、見通しがよくなる。
          </p>
          <p>
            ただ、この<code>idle</code>/<code>loading</code>/
            <code>success</code>/<code>error</code>
            の管理やエラーハンドリングは、fetchを使う場所が増えるたびに
            同じような形で書くことになる。次の「TanStack Query の useMutation
            で書き換える」では、この状態管理をライブラリに
            任せる方法を紹介する。
          </p>
        </>
      }
      demo={
        <>
          <CodeBlock code={hookSnippet} />
          <CodeBlock code={demoSnippet} />
          <Demo />
        </>
      }
    />
  );
}
