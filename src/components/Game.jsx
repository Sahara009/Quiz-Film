import React from "react";

export const Game = ({ percentage, question, onClickVariant }) => {
  if (!question) {
    return <div>wait...</div>;
  }

  const allAnswers = [...question.incorrectAnswers, question.correctAnswer];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(allAnswers);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.question}</h1>
      <ul>
        {allAnswers.map((answer, index) => (
          <li onClick={() => onClickVariant(answer)} key={index}>
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
};
