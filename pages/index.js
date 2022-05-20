import React, { useState } from "react";
import Card from "../components/Card";
import LifeLines from "../components/LifeLines";
import Stack from "../components/Stack";
import Header from "../components/Header";

const Start = () => {
  const [questionsArr, setQuestionsArr] = useState([
    {
      question: "who is the president of the USA?",
      answers: ["Biden", "Bush", "Clinton", "Obama"],
      correctAnswer: "Biden",
      worth: 100,
    },
    {
      question: "who is the president of the UK?",
      answers: ["Thatcher", "Cameron", "Boris", "Churchill"],
      correctAnswer: "Boris",
      worth: 200,
    },
  ]);

  const [current, setCurrent] = useState({
    question: "who is the president of the USA?",
    answers: ["Biden", "Bush", "Clinton", "Obama"],
    correctAnswer: "Biden",
    worth: 100,
  });

  const [allHints, setAllHints] = useState([
    { name: "50/50", used: false },
    { name: "Hint 1", used: false },
    { name: "Hint 2", used: false },
  ]);

  const analyseAnswer = (a) => {
    a === current.correctAnswer ? alert("well Done") : alert("crap");
  };

  return (
    <main className="h-screen grid grid-cols-1 bg-navy grid-rows-[50px_auto]">
      <Header />
      <div className="grid grid-cols-[2fr_1fr] grid-rows-[3fr_2fr]">
        <Card current={current} analyseAnswer={analyseAnswer} />
        <LifeLines
          allHints={allHints}
          setAllHints={setAllHints}
          answers={current.answers}
          correctAnswer={current.correctAnswer}
          setCurrent={setCurrent}
        />
        <Stack questionsArr={questionsArr} />
      </div>
    </main>
  );
};

export default Start;
