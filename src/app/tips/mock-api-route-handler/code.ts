export const routeSnippet = `// src/app/tips/mock-api-route-handler/api/janken/route.ts
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const userHand = body?.user_hand;

  if (!isHand(userHand)) {
    return NextResponse.json(
      { message: "user_hand must be one of rock, scissors, paper" },
      { status: 400 },
    );
  }

  const cpuHand = hands[Math.floor(Math.random() * hands.length)];
  const result = judge(userHand, cpuHand);

  return NextResponse.json({ cpu_hand: cpuHand, result });
}
`;

export const demoSnippet = `async function handleClick(userHand: string) {
  const res = await fetch("/tips/mock-api-route-handler/api/janken", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_hand: userHand }),
  });
  const data = await res.json();
  // data.cpu_hand, data.result を画面に表示する
}
`;
