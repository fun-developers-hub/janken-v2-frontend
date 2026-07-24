"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  type Hand = "rock" | "scissors" | "paper" | "";
  const [hand, setHand] = useState<Hand>("");

  const handLabels: Record<Exclude<Hand, "">, string> = {
    rock: "グー",
    scissors: "チョキ",
    paper: "パー",
  };
  return (
    <div className="flex h-full flex-col">
      <header>
        <h1 className="bg-newgreen font-dotgothic16 text-center text-4xl">
          TriGonFight
        </h1>
        <Link
          href="/tips"
          className="absolute top-1/2 right-2 -translate-y-1/2 text-sm underline">
          Tips
        </Link>
      </header>
      <div className="relative flex flex-1 items-center justify-center bg-violet-950 text-white">
        <div className="size-35 rounded-full bg-pink-700"></div>
        <Image
          src="/images/scissors.png"
          width={120}
          height={120}
          alt="チョキ"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></Image>
        {/* .circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
} */}
      </div>
      <div className="bg-newblue flex flex-1 flex-col">
        <div className="font-jersey_15 text-3xl text-white">CPU</div>
        <div className="flex flex-1 items-center justify-center">
          <div className="box-content flex h-32 w-50 items-center justify-center border-3 border-green-500 bg-white">
            <div className="font-jersey_15 text-7xl font-bold text-black">
              WIN
            </div>
          </div>
        </div>
        <div className="font-jersey_15 h-5 text-right text-3xl text-white">
          {" "}
          YOU
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center bg-violet-950 text-white">
        {hand === "rock" ? (
          <div className="size-35 rounded-full bg-blue-500"></div>
        ) : hand === "scissors" ? (
          <div className="size-35 rounded-full bg-red-500"></div>
        ) : hand === "paper" ? (
          <div className="size-35 rounded-full bg-yellow-300"></div>
        ) : (
          <div className="size-35 rounded-full bg-pink-700"></div>
        )}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {hand ? (
            <Image
              width={120}
              height={120}
              src={`/images/${hand}.png`}
              alt={handLabels[hand]}></Image>
          ) : null}
        </div>
      </div>
      <div className="bg-newgreen flex h-25 items-center justify-center">
        <button onClick={() => setHand("rock")} className="relative">
          <div className="m-2 flex size-20 items-center justify-center rounded-full bg-blue-500"></div>
          <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2">
            <Image
              width={100}
              height={100}
              src="/images/rock.png"
              alt="グー"></Image>
          </div>
        </button>
        <button onClick={() => setHand("scissors")} className="relative">
          <div className="m-2 size-20 rounded-full bg-red-500"></div>
          <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2">
            <Image
              width={100}
              height={100}
              src="/images/scissors.png"
              alt="チョキ"></Image>
          </div>
        </button>
        <button onClick={() => setHand("paper")} className="relative">
          <div className="m-2 size-20 rounded-full bg-yellow-300"></div>
          <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2">
            <Image
              width={100}
              height={100}
              src="/images/paper.png"
              alt="パー"></Image>
          </div>
        </button>
      </div>
    </div>
  );
}
