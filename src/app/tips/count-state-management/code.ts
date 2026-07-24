export const snippet = `"use client";

import { useReducer } from "react";

type CounterState = { win: number; lose: number; draw: number };
type CounterAction = { type: "win" | "lose" | "draw" } | { type: "reset" };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
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
    <div>
      <div>WIN: {state.win} / LOSE: {state.lose} / DRAW: {state.draw}</div>
      <button onClick={() => dispatch({ type: "win" })}>WIN</button>
      <button onClick={() => dispatch({ type: "reset" })}>リセット</button>
    </div>
  );
}
`;
