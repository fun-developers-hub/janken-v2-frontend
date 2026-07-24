export default function Page() {
  return (
    <div className="flex h-full flex-col">
      <header>
        <h1 className="bg-newgreen text-center text-4xl font-dotgothic16">
          TriGonFight
        </h1>
        {/* bgはbackground */}
        {/* この環境でh1は意味がないけど、タイトルというマークのためにつけてる */}
      </header>
      <div className="flex flex-1 items-center justify-center bg-violet-950 text-white">
        <div className="size-35 rounded-full bg-pink-700"></div>
        {/* .circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
} */}
      </div>
      <div className="bg-newblue flex flex-1 flex-col">
        <div className="text-3xl text-white font-jersey_15">CPU</div>
        <div className="flex flex-1 items-center justify-center">
          <div className="box-content flex h-32 w-50 items-center justify-center border-3 border-green-500 bg-white">
            <div className="text-7xl font-bold text-black font-jersey_15">WIN</div>
          </div>
        </div>
        <div className="h-5 text-right text-3xl text-white font-jersey_15"> YOU</div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-violet-950 text-white">
        <div className="size-35 rounded-full bg-pink-700"></div>
      </div>
      <div className="bg-newgreen flex h-25 items-center justify-center">
        <div className="m-2 size-20 rounded-full bg-blue-500"></div>
        <div className="m-2 size-20 rounded-full bg-red-500"></div>
        <div className="m-2 size-20 rounded-full bg-yellow-300"></div>
      </div>
    </div>
  );
}
