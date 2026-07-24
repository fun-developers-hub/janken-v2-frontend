"use client";

import { useJankenFetch } from "./useJankenFetch";

export function Demo() {
  const { status, cpuHand, result, errorMessage, fetchHand } =
    useJankenFetch();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => fetchHand("rock")}
          className="bg-newblue rounded-md px-4 py-2 text-white">
          正常なリクエスト(グー)
        </button>
        <button
          type="button"
          onClick={() => fetchHand("invalid")}
          className="rounded-md bg-red-600 px-4 py-2 text-white">
          エラーを発生させる
        </button>
      </div>
      <div className="text-sm">
        状態: <span className="font-bold">{status}</span>
        {status === "success" ? (
          <div className="mt-1">
            CPUの手: {cpuHand} / 結果: {result}
          </div>
        ) : null}
        {status === "error" ? (
          <div className="mt-1">{errorMessage}</div>
        ) : null}
      </div>
    </div>
  );
}
