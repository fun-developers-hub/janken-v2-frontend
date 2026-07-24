"use client";

import { useState } from "react";
import type { Hand } from "../types";
type Status = "idle" | "loading" | "success" | "error";

export function useJankenFetch() {
  const [status, setStatus] = useState<Status>("idle");
  const [cpuHand, setCpuHand] = useState<Hand>("");
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchHand(userHand: string) {
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
      setCpuHand(data.cpu_hand);
      setResult(data.result);
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "不明なエラー");
      setStatus("error");
    }
  }

  return { status, cpuHand, result, errorMessage, fetchHand };
}