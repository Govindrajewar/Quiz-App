import React, { useState } from "react";
import "./Quiz.css";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();

    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }

    if (currentQuestion === QuizData.length - 1) {
      alert("You have completed the quiz");
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setCurrentQuestion(0);
    setScore(0);
    setClickedOption(0);
    setShowResult(false);
    window.location.reload();
  };

  return (
    <div className="quiz">
      {showResult ? (
        <QuizResult
          score={score}
          totalScore={QuizData.length}
          resetAll={resetAll}
        />
      ) : (
        <>
          <div className="container">
            <div className="question">
              <span id="question-no">{currentQuestion + 1}. </span>
              <span id="question-text">
                {QuizData[currentQuestion].question}
              </span>
            </div>

            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, index) => {
                return (
                  <button
                    className={`option ${
                      clickedOption === index + 1 ? "checked" : null
                    }`}
                    key={index}
                    onClick={() => setClickedOption(index + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <button id="next-button" onClick={changeQuestion}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
