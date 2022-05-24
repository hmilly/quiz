import React, { useState } from "react";
import Card from "../components/Card";
import LifeLines from "../components/LifeLines";
import Stack from "../components/Stack";
import Header from "../components/Header";
import { questionsArr, startingHints } from "../public/questions";

const Start = () => {
  const [questionObj, setQuestionObj] = useState(questionsArr.set_1[0]);
  const [allHints, setAllHints] = useState(startingHints);
  const [msg, setMsg] = useState(``);

  const nextQuestion = (id, delay) =>
    setTimeout(() => {
      setQuestionObj(questionsArr.set_1[id]);
      setMsg("");
    }, delay);

  const endGame = (msg, amount) => {
    nextQuestion(0, 10000);
    setMsg(`${msg}, You took £${amount}`);
    setAllHints(startingHints);
  };

  const analyseAnswer = (a) => {
    const id = parseInt(questionObj.id);

    if (a === questionObj.correctAnswer && id + 1 <= 15) {
      nextQuestion(id, 2000);
      setMsg("Congrats!");
    } else if (a === questionObj.correctAnswer && id === 15) {
      nextQuestion(id, 100000);
      setMsg("YOU WON! £1,000,000");
    } else {
      endGame(`Too bad!! Try again!`, 0);
    }
  };

  return (
    <main className="h-screen grid grid-cols-1 grid-rows-[50px_auto]">
      <Header />
      <div className="grid grid-cols-[2fr_1fr] bg-navy grid-rows-[3fr_2fr]">
        <Card questionObj={questionObj} analyseAnswer={analyseAnswer} />
        <LifeLines
          allHints={allHints}
          setAllHints={setAllHints}
          questionObj={questionObj}
          setQuestionObj={setQuestionObj}
          msg={msg}
        />
        <Stack
          questionsArr={questionsArr.set_1}
          questionObj={questionObj}
          endGame={endGame}
        />
      </div>
    </main>
  );
};

export default Start;
