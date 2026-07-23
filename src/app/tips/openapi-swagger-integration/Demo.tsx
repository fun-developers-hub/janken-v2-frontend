"use client";

import { useState } from "react";

type Endpoint = { method: string; path: string; summary: string };
type Status = "idle" | "loading" | "success" | "error";

export function Demo() {
  const [status, setStatus] = useState<Status>("idle");
  const [endpoints, setEndpoints] = useState<Endpoint[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleFetch() {
    setStatus("loading");
    try {
      const res = await fetch("/tips/openapi-swagger-integration/api");
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message ?? "取得に失敗しました");
      }
      setEndpoints(data.endpoints);
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "不明なエラー");
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={handleFetch}
        className="bg-newblue self-start rounded-md px-4 py-2 text-white">
        エンドポイント一覧を取得
      </button>
      {status === "loading" ? <p className="text-sm">取得中...</p> : null}
      {status === "error" ? (
        <p className="text-sm text-red-600">{errorMessage}</p>
      ) : null}
      {status === "success" ? (
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-300 text-left">
              <th className="p-2">Method</th>
              <th className="p-2">Path</th>
              <th className="p-2">Summary</th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map(endpoint => (
              <tr
                key={`${endpoint.method}-${endpoint.path}`}
                className="border-b border-slate-200">
                <td className="p-2 font-mono">{endpoint.method}</td>
                <td className="p-2 font-mono">{endpoint.path}</td>
                <td className="p-2">{endpoint.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
