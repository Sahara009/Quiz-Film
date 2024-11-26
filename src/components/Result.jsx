import React from "react";

export const Result = ({ correct }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You have guessed {correct} question out of 10</h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
};
