"use client";

import { useState } from "react";

export function Demo() {
  const [useMono, setUseMono] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className={useMono ? "font-mono text-xl" : "font-sans text-xl"}>
        TriGonFight - じゃんけん勝負！
      </p>
      <button
        type="button"
        onClick={() => setUseMono(v => !v)}
        className="bg-newblue rounded-md px-4 py-2 text-white">
        {useMono ? "font-sans に切り替え" : "font-mono に切り替え"}
      </button>
    </div>
  );
}
