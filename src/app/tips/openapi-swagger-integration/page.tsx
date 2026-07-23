import { CodeBlock } from "../_components/CodeBlock";
import { ConceptSection } from "../_components/ConceptSection";
import { routeSnippet } from "./code";
import { Demo } from "./Demo";

export default function Page() {
  return (
    <ConceptSection
      title="OpenAPI/Swaggerで実APIと連携する"
      explanation={
        <>
          <p>
            このアプリが接続する実バックエンドは{" "}
            <code>https://janken.ma41.net</code> で、その仕様は{" "}
            <code>https://janken.ma41.net/swagger/doc.json</code>{" "}
            として公開されている。このJSONの <code>paths</code>{" "}
            以下に、各エンドポイントのパス・HTTPメソッド・
            <code>summary</code>（概要）が入っている。
          </p>
          <p>
            実際に確認したところ、<code>GET /health</code>、
            <code>GET /health/db</code>、<code>POST /janken</code>、
            <code>GET /janken/counter</code> の4つのエンドポイントがある。
          </p>
          <p>
            このバックエンドはCORSの許可ヘッダーを返さないため、
            ブラウザから直接 <code>fetch</code>{" "}
            すると失敗する。そのため、同一オリジンの Route Handler
            をサーバーサイドの中継（プロキシ）として経由させ、
            ブラウザは自分のオリジンにだけ <code>fetch</code>{" "}
            すれば済むようにする。Phase
            3で実APIに接続する際も同じ考え方が使える。
          </p>
        </>
      }
      demo={
        <>
          <CodeBlock code={routeSnippet} lang="ts" />
          <Demo />
        </>
      }
    />
  );
}
