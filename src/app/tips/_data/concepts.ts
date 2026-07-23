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
    title: "next/font によるフォント最適化",
    phaseLabel: "Phase 1-4",
    issueUrl:
      "https://github.com/fun-developers-hub/janken-v2-frontend/issues/23",
    summary: "next/font/google を使ったフォント読み込みの最適化とCLS対策。",
  },
  {
    slug: "mock-api-route-handler",
    title: "Route Handler で作るAPIモック",
    phaseLabel: "Phase 2-2",
    issueUrl:
      "https://github.com/fun-developers-hub/janken-v2-frontend/issues/15",
    summary: "app/**/route.ts の書き方と、じゃんけんAPIのモック実装。",
  },
  {
    slug: "client-side-fetch",
    title: "fetch によるクライアントサイド取得",
    phaseLabel: "Phase 2-3",
    issueUrl:
      "https://github.com/fun-developers-hub/janken-v2-frontend/issues/16",
    summary:
      "loading/error状態を含む、クライアントコンポーネントでのfetchパターン。",
  },
  {
    slug: "openapi-swagger-integration",
    title: "OpenAPI/Swaggerで実APIと連携する",
    phaseLabel: "Phase 3",
    issueUrl:
      "https://github.com/fun-developers-hub/janken-v2-frontend/issues/11",
    summary:
      "swagger doc.jsonからAPI仕様を読み解き、サーバー経由で実データを取得する。",
  },
  {
    slug: "count-state-management",
    title: "回数カウンターの状態管理",
    phaseLabel: "Phase 4",
    issueUrl:
      "https://github.com/fun-developers-hub/janken-v2-frontend/issues/18",
    summary: "useReducerを使った、複数アクションを持つ状態のカウント管理。",
  },
];
