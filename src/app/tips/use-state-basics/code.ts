export const snippet = `"use client";

import { useState } from "react";

const hands = [
  { id: "rock", label: "グー" },
  { id: "scissors", label: "チョキ" },
  { id: "paper", label: "パー" },
] as const;

export function Demo() {
  const [hand, setHand] = useState("");

  return (
    <div>
      <div>選択中の手: {hand || "未選択"}</div>
      <div>
        {hands.map(h => (
          <button key={h.id} onClick={() => setHand(h.id)}>
            {h.label}
          </button>
        ))}
      </div>
    </div>
  );
}
`;
