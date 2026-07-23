export const snippet = `"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function Demo() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleFetch(userHand: string) {
    setStatus("loading");
    try {
      const res = await fetch("https://janken.ma41.net/janken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_hand: userHand }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "リクエストに失敗しました");
      }
      setMessage(\`CPUの手: \${data.cpu_hand} / 結果: \${data.result}\`);
      setStatus("success");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "不明なエラー");
      setStatus("error");
    }
  }

  return <div>{/* status に応じて表示を切り替える */}</div>;
}
`;
