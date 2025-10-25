import React, { useState } from 'react'

 // 要件定義の質問を配列で管理する
const questions = [
  {
    id: "2",
    text: "人の言葉をさえぎって自分の考えを述べることがありますか？",
  },
  {
    id: "1",
    text: "人の話を最後まで聞かずに意見を言うことがありますか？",
  },
  {
    id: "0",
    text: "議論の場で自分の意見を強く主張することがありますか？",
  },
];

const TaEgoGram = () => {
  // 回答状態を管理する
  const [answers, setAnswers] = useState({});

  // 合計の状態管理
  const [total, setTotal] = useState(0);

  //ラジオボタン変更時の処理
  const handleChange = (id, value) => {
    // 選択された時点で合計点を処理させる
    setAnswers((prev) => {

      const updated = {...prev, [id]: value };

      const toalScore = Object.values(updated).reduce(
        (a, b) => a + Number(b),
        0
      );

      setTotal(toalScore);
     // console.log(updated);
      return updated;
    });

  }


  return (
    <>
      <div>
        <h2>CP評価フォーム</h2>

        {questions.map((q) => (
          <div key={q.id}>
            <p>{q.text}</p>
            <label>
              <input
                type="radio"
                value="2"
                name={q.id}
                checked={answers[q.id] === "2"}
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
              ○（2点）
            </label>
            <label>
              <input
                type="radio"
                value="1"
                name={q.id}
                checked={answers[q.id] === "1"}
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
              △（1点）
            </label>
            <label>
              <input
                type="radio"
                value="0"
                name={q.id}
                checked={answers[q.id] === "0"}
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
              ×（0点）
            </label>
          </div>
        ))}
        <button type="submit">合計を計算する</button>

        {total !== null && <div>合計点: {total}</div>}
      </div>
    </>
  );
}



export default TaEgoGram;
