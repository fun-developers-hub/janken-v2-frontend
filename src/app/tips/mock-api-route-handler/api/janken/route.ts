import { NextResponse, type NextRequest } from "next/server";

type Hand = "rock" | "scissors" | "paper";
type Result = "win" | "lose" | "draw";

const hands: Hand[] = ["rock", "scissors", "paper"];

function isHand(value: unknown): value is Hand {
  return typeof value === "string" && hands.includes(value as Hand);
}

function judge(userHand: Hand, cpuHand: Hand): Result {
  if (userHand === cpuHand) return "draw";
  const userWinsAgainst: Record<Hand, Hand> = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };
  return userWinsAgainst[userHand] === cpuHand ? "win" : "lose";
}

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
