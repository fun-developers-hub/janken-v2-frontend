import { CodeBlock } from "../_components/CodeBlock";
import { ConceptSection } from "../_components/ConceptSection";
import { demoSnippet, routeSnippet } from "./code";
import { Demo } from "./Demo";

export default function Page() {
  return (
    <ConceptSection
      title="Route Handler で作るAPIモック"
      explanation={
        <>
          <p>
            Next.js の App Router では、<code>route.ts</code>{" "}
            というファイルを置くだけで、そのパスにAPIエンドポイントを
            実装できる（Route Handler）。<code>GET</code>/<code>POST</code>{" "}
            などHTTPメソッド名の関数をexportし、
            <code>NextResponse.json()</code> でレスポンスを返す。
          </p>
          <p>
            実際のバックエンド（
            <code>https://janken.ma41.net</code>）のswagger仕様では、
            <code>POST /janken</code> は <code>user_hand</code> を受け取り、
            <code>cpu_hand</code> と <code>result</code>
            （win/lose/draw）を返す。 モックもこの形に合わせて作ることで、 Phase
            3で実APIに差し替える際の変更を小さくできる。
          </p>
          <p>
            不正な <code>user_hand</code>{" "}
            が送られてきた場合は400を返すようにしており、 これは次の「fetch
            によるクライアントサイド取得」でエラー処理を学ぶ際にも使う。
          </p>
        </>
      }
      demo={
        <>
          <CodeBlock code={routeSnippet} lang="ts" />
          <CodeBlock code={demoSnippet} lang="ts" />
          <Demo />
        </>
      }
    />
  );
}
