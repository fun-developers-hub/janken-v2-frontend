export type Concept = {
  slug: string;
  title: string;
  phaseLabel: string;
  issueUrl?: string;
  summary: string;
};

export const concepts: Concept[] = [
  {
    slug: "use-state-basics",
    title: "Client Components と useState",
    phaseLabel: "Phase 1",
    summary:
      "「use client」とuseStateによるUI状態管理・イベントハンドリングの基礎。",
  },
  {
    slug: "next-font-optimization",
    title: "next/font でのフォント設定",
    phaseLabel: "Phase 1-4",
    issueUrl:
      "https://github.com/fun-developers-hub/janken-v2-frontend/issues/23",
    summary:
      "next/font/google でフォントを読み込み、実際に適用するまでの設定方法。",
  },
  {
    slug: "client-side-fetch",
    title: "fetch によるクライアントサイド取得",
    phaseLabel: "Phase 2",
    issueUrl:
      "https://github.com/fun-developers-hub/janken-v2-frontend/issues/11",
    summary:
      "loading/error状態を含む、クライアントコンポーネントでのfetchパターン。",
  },
  {
    slug: "tanstack-query-mutation",
    title: "TanStack Query の useMutation で書き換える",
    phaseLabel: "Phase 2（発展）",
    summary:
      "自前のuseState/try-catchによる状態管理を、useMutationに任せる書き方。",
  },
  {
    slug: "count-state-management",
    title: "回数カウンターの状態管理",
    phaseLabel: "Phase 3（任意）",
    issueUrl:
      "https://github.com/fun-developers-hub/janken-v2-frontend/issues/18",
    summary: "useReducerを使った、複数アクションを持つ状態のカウント管理。",
  },
];
