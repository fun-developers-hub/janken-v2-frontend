"use client";

import { useState } from "react";

const hands = [
  { id: "rock", label: "グー" },
  { id: "scissors", label: "チョキ" },
  { id: "paper", label: "パー" },
] as const;

export function Demo() {
  const [result, setResult] = useState<{
    cpuHand: string;
    result: string;
  } | null>(null);

  async function handleClick(userHand: string) {
    const res = await fetch("/tips/mock-api-route-handler/api/janken", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_hand: userHand }),
    });
    const data = await res.json();
    setResult({ cpuHand: data.cpu_hand, result: data.result });
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {hands.map(h => (
          <button
            key={h.id}
            type="button"
            onClick={() => handleClick(h.id)}
            className="bg-newblue rounded-md px-4 py-2 text-white">
            {h.label}
          </button>
        ))}
      </div>
      {result ? (
        <div className="text-sm">
          CPUの手: <span className="font-bold">{result.cpuHand}</span> / 結果:{" "}
          <span className="font-bold">{result.result}</span>
        </div>
      ) : null}
    </div>
  );
}
