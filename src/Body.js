import React, { useState } from "react";
import AnswerEvaluator from "./AnswerEvaluator";
import QuestionCreator from "./QuestionCreator";

let ansArr = [];
function Body() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState({});
  const [index, setIndex] = useState(0);
  const [quesArr, setQuesArr] = useState([]);
  const [ansArr, setAnsArr] = useState([]);
  const [question, setQuestion] = useState("");
  const [buttonText, setButtonText] = useState("Start Quiz");
  const displayResult = () => {
    setIndex(index + 1);
    setResult(AnswerEvaluator(quesArr, ansArr));
  };
  window.addEventListener("DOMContentLoaded", (event) => {
    let temp = QuestionCreator();
    setQuesArr(temp);
  });
  const handleClick = () => {
    console.log(quesArr);
    if (index >= 11) {
      setButtonText("Finish Quiz");
      displayResult();
    } else if (index === 0) {
      setButtonText("Next Question");
      setQuestion(quesArr[index]);
      setIndex(index + 1);
    } else {
      setAnsArr([...ansArr, answer]);

      setQuestion(quesArr[index]);

      index === 10
        ? setButtonText("Finish Quiz")
        : setButtonText("Next Question");
      setIndex(index + 1);
    }
    setAnswer("");
  };
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };
  const { marks, correctAnswerIndex, wrongAnswerIndex } = result;
  const resultList = quesArr.map((item) => {
    <li>{item}</li>;
  });

  return (
    <div className="half">
      <h2 style={{ margin: "10px" }}>Quiz</h2>
      <input
        onChange={handleAnswer}
        disabled={index === 0 || index > 10 ? true : ""}
        placeholder="Answer"
        type="text"
        value={answer}
      />
      <button onClick={handleClick} disabled={index === 12 ? true : ""}>
        {buttonText}
      </button>
      <div>{question ? question.slice(0, 23) : ""}</div>
      <div>{index === 12 ? `Result is ${marks ?? 0}` : ""}</div>
      <div>
        <ul>{resultList}</ul>

        {index === 12 && (
          <div>
            {" "}
            <div>
              {correctAnswerIndex && correctAnswerIndex.length ? (
                <div>
                  Correct answers are{" "}
                  {correctAnswerIndex.map((i) => (
                    <li>{quesArr[i]}</li>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="wrongAnswers">
              {wrongAnswerIndex && wrongAnswerIndex.length ? (
                <div>
                  Wrong answers are{" "}
                  {wrongAnswerIndex.map((i) => (
                    <li>{quesArr[i]}</li>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;
