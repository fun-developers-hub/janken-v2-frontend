"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function Demo() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleFetch(userHand: string) {
    setStatus("loading");
    try {
      const res = await fetch("/tips/mock-api-route-handler/api/janken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_hand: userHand }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message ?? "リクエストに失敗しました");
      }
      setMessage(`CPUの手: ${data.cpu_hand} / 結果: ${data.result}`);
      setStatus("success");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "不明なエラー");
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => handleFetch("rock")}
          className="bg-newblue rounded-md px-4 py-2 text-white">
          正常なリクエスト(グー)
        </button>
        <button
          type="button"
          onClick={() => handleFetch("invalid")}
          className="rounded-md bg-red-600 px-4 py-2 text-white">
          エラーを発生させる
        </button>
      </div>
      <div className="text-sm">
        状態: <span className="font-bold">{status}</span>
        {message ? <div className="mt-1">{message}</div> : null}
      </div>
    </div>
  );
}
