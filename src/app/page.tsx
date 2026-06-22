export default function Page() {
  return (
    <div className="flex h-full flex-col">
      <header>
        <h1 className="bg-newgreen text-center text-4xl">TriGonFight</h1>
        {/* bgはbackground */}
        {/* この環境でh1は意味がないけど、タイトルというマークのためにつけてる */}
      </header>
      <div className="flex-1 bg-violet-950 text-white">相手の出し手を表示する部分</div>
      <div className="bg-newblue flex-1">勝敗を表示する部分</div>
      <div className="flex-1 bg-violet-950 text-white">自分の出し手を表示する部分</div>
      <div className="h-25 bg-newgreen">手のボタンを表示する部分</div>
    </div>
  );
}
