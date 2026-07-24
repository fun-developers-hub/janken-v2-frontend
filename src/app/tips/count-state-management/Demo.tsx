"use client";

import { useReducer } from "react";

type CounterState = { win: number; lose: number; draw: number };
type CounterAction = { type: "win" | "lose" | "draw" } | { type: "reset" };

function counterReducer(
  state: CounterState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case "win":
      return { ...state, win: state.win + 1 };
    case "lose":
      return { ...state, lose: state.lose + 1 };
    case "draw":
      return { ...state, draw: state.draw + 1 };
    case "reset":
      return { win: 0, lose: 0, draw: 0 };
  }
}

export function Demo() {
  const [state, dispatch] = useReducer(counterReducer, {
    win: 0,
    lose: 0,
    draw: 0,
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4 text-sm">
        <div>
          WIN: <span className="font-bold">{state.win}</span>
        </div>
        <div>
          LOSE: <span className="font-bold">{state.lose}</span>
        </div>
        <div>
          DRAW: <span className="font-bold">{state.draw}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => dispatch({ type: "win" })}
          className="rounded-md bg-green-600 px-4 py-2 text-white">
          WIN
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "lose" })}
          className="rounded-md bg-red-600 px-4 py-2 text-white">
          LOSE
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "draw" })}
          className="rounded-md bg-slate-500 px-4 py-2 text-white">
          DRAW
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "reset" })}
          className="rounded-md bg-slate-200 px-4 py-2">
          リセット
        </button>
      </div>
    </div>
  );
}
