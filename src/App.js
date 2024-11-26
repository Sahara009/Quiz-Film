import { useEffect, useState } from "react";
import { Game } from "./components/Game";
import { Result } from "./components/Result";
import "./index.scss";
import axios from "axios";

function App() {
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [correct, setCorrect] = useState(0);

  const currentQuestion = questions?.[step];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=10&region=RU&difficulty=medium`
        );
        setQuestions(res.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  const percentage = Math.round((step / questions?.length) * 100);

  const onClickVariant = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };

  return (
    <div className="App">
      {step === questions.length ? (
        <Result correct={correct} />
      ) : (
        <Game
          percentage={percentage}
          question={currentQuestion}
          onClickVariant={onClickVariant}
        />
      )}
    </div>
  );
}

export default App;
