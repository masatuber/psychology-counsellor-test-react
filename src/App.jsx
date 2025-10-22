
import { useState } from "react";
import "./App.css";

function App() {
  // 要件定義の質問を配列で管理する
  // const questions = [
  //   {
  //     id: "CP1",
  //     text: "人の言葉をさえぎって自分の考えを述べることがありますか？",
  //   },
  //   {
  //     id: "CP2",
  //     text: "人の話を最後まで聞かずに意見を言うことがありますか？",
  //   },
  //   {
  //     id: "CP3",
  //     text: "議論の場で自分の意見を強く主張することがありますか？",
  //   },
  // ];

  // ラジオボタン練習
  const [choice, setChoice] = useState(""); // ラジオボタンの状態保持

  // 結果の状態管理する
  const [result, setResult] = useState("");

  // リアルタイムでラジオボタンを取得する
  const handleRadio = e => {
    setChoice(e.target.value);
    setResult(`あなたが選んだのは${choice}`);
  }

  const submit = () => {
    console.log(`選択した値は${choice}`);
    setResult(`あなたが選んだのは${choice}`);
  }
  return (
    <>
      <div>
        <p>あなたの好きな動物： {choice}</p>
      </div>
      <form>
        <div>
          <label>イヌ</label>
          <input
            type="radio"
            name="animal"
            value="dog"
            onChange={handleRadio}
          />
        </div>
        <div>
          <label>ネコ</label>
          <input
            type="radio"
            name="animal"
            value="cat"
            onChange={handleRadio}
          />
        </div>
        <div>
          <label>サル</label>
          <input
            type="radio"
            name="animal"
            value="monkey"
            onChange={handleRadio}
          />
        </div>
        <div>
          <button type="button" onClick={submit}>
            送信
          </button>
        </div>
      </form>
      {/* 結果をJSX内に表示 結果は状態管理、クリックで更新用関数呼び変数をセットする, 短絡評価で条件付きJSXを描画する */}
      {result && <p>{result}</p>}
    </>
  );
};

export default App;
