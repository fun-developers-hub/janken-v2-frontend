"use client";

import { useState } from "react";

const hands = [
  { id: "rock", label: "グー" },
  { id: "scissors", label: "チョキ" },
  { id: "paper", label: "パー" },
] as const;

export function Demo() {
  const [hand, setHand] = useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-lg">
        選択中の手: <span className="font-bold">{hand || "未選択"}</span>
      </div>
      <div className="flex gap-2">
        {hands.map(h => (
          <button
            key={h.id}
            type="button"
            onClick={() => setHand(h.id)}
            className={
              hand === h.id
                ? "bg-newblue rounded-md px-4 py-2 text-white"
                : "rounded-md bg-slate-200 px-4 py-2"
            }>
            {h.label}
          </button>
        ))}
      </div>
    </div>
  );
}
