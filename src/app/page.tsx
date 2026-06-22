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
        <div className="flex-1 text-center">勝敗を表示する部分</div>
        <div className="text-right text-white"> YOU</div>
      </div>
      <div className="flex-1 bg-violet-950 text-white">
        <div></div>
        自分の出し手を表示する部分
      </div>
      <div className="bg-newgreen h-25">手のボタンを表示する部分</div>
    </div>
  );
}
