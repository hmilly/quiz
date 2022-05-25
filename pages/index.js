import React, { useState } from "react";
import Card from "../components/Card";
import LifeLines from "../components/LifeLines";
import Stack from "../components/Stack";
import Header from "../components/Header";
import { questionsArr, startingHints } from "../public/questions";

const Start = () => {
  const [questionObj, setQuestionObj] = useState(questionsArr.set_1[0]);
  const [allHints, setAllHints] = useState(startingHints);
  const [msg, setMsg] = useState(`Welcome to who wants to be a millionaire`);
  const [play, setPlay] = useState(false);

  const formatMoney = (amount) =>
    amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const endGame = (msg, amount) => {
    setPlay(false);
    setMsg(amount ? `${msg} You took £${formatMoney(amount)}` : `${msg}`);
  };

  const nextQuestion = (id) =>
    setTimeout(() => {
      setQuestionObj(questionsArr.set_1[id]);
    }, 2000);

  const analyseAnswer = (answer) => {
    const id = parseInt(questionObj.id);

    if (answer === questionObj.correctAnswer && id + 1 < 15) {
      nextQuestion(id);
    } else if (answer === questionObj.correctAnswer && id === 15) {
      setQuestionObj({ ...questionObj, id: 16 });
      endGame(`CONGRATULATIONS - YOU WON $1 MILLION!!`);
    } else {
      endGame(`Too bad!! Try again!`);
    }
  };

  return (
    <main className="h-screen relative grid grid-cols-1 grid-rows-[50px_auto]">
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
          formatMoney={formatMoney}
        />
      </div>
      {!play ? (
        <div className="bg-opacityBlack h-full w-full absolute top-0 left-0 grid content-center justify-center gap-10">
          <p className="custom-border">{msg}</p>
          <button
            className="px-16 py-6 rounded-md border-4 m-6 border-black text-3xl font-bold bg-white"
            onClick={() => {
              setPlay(true);
              setQuestionObj(questionsArr.set_1[0]);
              setAllHints(startingHints);
            }}
          >
            Start!
          </button>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Start;
