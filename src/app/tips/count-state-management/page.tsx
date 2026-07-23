import { CodeBlock } from "../_components/CodeBlock";
import { ConceptSection } from "../_components/ConceptSection";
import { snippet } from "./code";
import { Demo } from "./Demo";

export default function Page() {
  return (
    <ConceptSection
      title="回数カウンターの状態管理"
      explanation={
        <>
          <p>
            <code>useState</code> を勝ち・負け・引き分けの回数それぞれに
            用意すると、更新のたびに複数の <code>set</code>{" "}
            関数を呼び分ける必要が出てきて見通しが悪くなる。
            <code>useReducer</code>{" "}
            を使うと、「どんな種類の更新（アクション）が起きたか」を{" "}
            <code>dispatch</code> に渡すだけで済み、実際の更新ロジックは1箇所の{" "}
            <code>reducer</code> 関数にまとまる。
          </p>
          <p>
            じゃんけんの回数カウンター（Phase
            4）では、勝ち・負け・引き分けという関連する複数の状態を
            同時に扱うため、<code>useReducer</code>{" "}
            の方が状態遷移を見通しよく書ける。
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
