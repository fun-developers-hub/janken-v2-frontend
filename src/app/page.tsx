export default function Page() {
  return (
    <div className="flex h-full flex-col">
      <header>
        <h1 className="bg-newgreen text-center text-4xl">TriGonFight</h1>
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
        <div className="text-white">CPU</div>
        <div className="flex flex-1 items-center justify-center">
          <div className="box-content flex h-32 w-50 items-center justify-center border-3 border-green-500 bg-white">
            <div className="text-7xl font-bold text-black">WIN</div>
          </div>
        </div>
        <div className="h-5 text-right text-white"> YOU</div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-violet-950 text-white">
        <div className="size-35 rounded-full bg-pink-700"></div>
      </div>
      <div className="bg-newgreen flex h-25 items-center justify-center ">
        <div className="relative">
          <div className="m-2 flex size-20 items-center justify-center rounded-full bg-blue-500"></div>
          <div className=" absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 size-20">
            <img src="images/rock.png"></img>
          </div>
        </div>
          <div className="relative">
            <div className="m-2 size-20 rounded-full bg-red-500"></div>
            <div className=" absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 size-20">
            <img src="images/scissors.png"></img>
          </div>
        </div>
        <div className="relative">
          <div className="m-2 size-20 rounded-full bg-yellow-300"></div>
          <div className=" absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 size-20">
            <img src="images/paper.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
