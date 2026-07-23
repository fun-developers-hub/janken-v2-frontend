import { CodeBlock } from "../_components/CodeBlock";
import { ConceptSection } from "../_components/ConceptSection";
import { mutationSnippet, providerSnippet } from "./code";
import { Demo } from "./Demo";

export default function Page() {
  return (
    <ConceptSection
      title="TanStack Query の useMutation で書き換える"
      explanation={
        <>
          <p>
            前回の「fetch によるクライアントサイド取得」では、
            <code>idle</code>/<code>loading</code>/<code>success</code>/
            <code>error</code>{" "}
            の状態管理とエラーハンドリングをカスタムフックに書いていた。
            この形は、fetchする箇所が増えるたびに同じような
            コードを書くことになる。
          </p>
          <p>
            <code>@tanstack/react-query</code> の <code>useMutation</code>{" "}
            を使うと、実際にリクエストを送る関数（
            <code>mutationFn</code>）だけ渡せば、
            <code>status</code>（<code>idle</code>/<code>pending</code>/
            <code>success</code>/<code>error</code>）や、成功時の{" "}
            <code>data</code>、失敗時の <code>error</code>{" "}
            をライブラリ側が管理してくれる。呼び出す側は{" "}
            <code>mutation.mutate(...)</code>{" "}
            を呼ぶだけでよく、自前のuseStateやtry/catchが不要になる。
          </p>
          <p>
            ただし <code>useMutation</code>/<code>useQuery</code>{" "}
            を使うには、コンポーネントツリーの上位を{" "}
            <code>QueryClientProvider</code>{" "}
            で包んでおく必要がある。通常はアプリのルート（
            <code>layout.tsx</code>{" "}
            など）に1つ置くが、このデモではページ単体で動かすため{" "}
            <code>Demo</code> コンポーネントの中で完結させている。
          </p>
          <p>
            参考:{" "}
            <a
              href="https://tanstack.com/query/latest/docs/framework/react/guides/mutations"
              className="text-newblue underline">
              TanStack Query - Mutations
            </a>
          </p>
        </>
      }
      demo={
        <>
          <CodeBlock code={mutationSnippet} />
          <CodeBlock code={providerSnippet} />
          <Demo />
        </>
      }
    />
  );
}
