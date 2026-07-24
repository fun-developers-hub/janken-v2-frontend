"use client";

import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";

async function postJankenHand(userHand: string) {
  const res = await fetch("https://janken.ma41.net/janken", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_hand: userHand }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error ?? "リクエストに失敗しました");
  }
  return data as { cpu_hand: string; result: string };
}

function DemoInner() {
  const mutation = useMutation({ mutationFn: postJankenHand });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => mutation.mutate("rock")}
          className="bg-newblue rounded-md px-4 py-2 text-white">
          正常なリクエスト(グー)
        </button>
        <button
          type="button"
          onClick={() => mutation.mutate("invalid")}
          className="rounded-md bg-red-600 px-4 py-2 text-white">
          エラーを発生させる
        </button>
      </div>
      <div className="text-sm">
        状態: <span className="font-bold">{mutation.status}</span>
        {mutation.data ? (
          <div className="mt-1">
            CPUの手: {mutation.data.cpu_hand} / 結果: {mutation.data.result}
          </div>
        ) : null}
        {mutation.error ? (
          <div className="mt-1">{mutation.error.message}</div>
        ) : null}
      </div>
    </div>
  );
}

export function Demo() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <DemoInner />
    </QueryClientProvider>
  );
}
