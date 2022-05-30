import React, { useState } from "react";
import Card from "../components/Card";
import LifeLines from "../components/LifeLines";
import Stack from "../components/Stack";
import Header from "../components/Header";
import { questionsArr, startingHints } from "../public/questions";
import { formatMoney, capMoney } from "../fns/functions";

const Start = () => {
  const [questionObj, setQuestionObj] = useState(questionsArr.set_1[0]);
  const [allHints, setAllHints] = useState(startingHints);
  const [endGame, setEndGame] = useState({
    playing: false,
    msg: `Welcome to who wants to be a millionaire`,
  });

  const correctAnswer = (id) => {
    if (id <= 13) {
      setTimeout(() => {
        setQuestionObj(questionsArr.set_1[id]);
      }, 2000);
    } else {
      // id to 15 to highlight correct £ on the board
      setQuestionObj({ ...questionObj, id: 15 });
      setEndGame({
        playing: false,
        msg: `CONGRATULATIONS - YOU WON $1 MILLION!!`,
      });
    }
  };

  const analyseAnswer = (answer) => {
    const id = parseInt(questionObj.id);
    if (answer === questionObj.correctAnswer) {
      correctAnswer(id);
    } else {
      const cap = capMoney(id);
      // id to represent correct £ on the board
      setQuestionObj({ ...questionObj, id: id > 4 ? cap + 2 : -1 });
      setEndGame({
        playing: false,
        msg: `Too bad!! Try again!
        ${
          id > 5
            ? `, you took: £${formatMoney(questionsArr.set_1[cap].worth)}`
            : ""
        }`,
      });
    }
  };

  return (
    <main className="h-screen relative grid grid-cols-1 grid-rows-[50px_auto]">
      <Header />
      <div className="grid grid-cols-[2fr_1fr] bg-navy lg:grid-rows-[3fr_2fr]">
        <Card questionObj={questionObj} analyseAnswer={analyseAnswer} />
        <LifeLines
          allHints={allHints}
          setAllHints={setAllHints}
          questionObj={questionObj}
          setQuestionObj={setQuestionObj}
        />
        <Stack
          questionsArr={questionsArr.set_1}
          questionObj={questionObj}
          setEndGame={setEndGame}
        />
      </div>
      {/* Display overscreen when game ends */}
      {!endGame.playing ? (
        <div className="bg-opacityBlack h-full w-full absolute top-0 left-0 grid content-center justify-center gap-10">
          <p className="custom-border">{endGame.msg}</p>
          <button
            className="py-4 rounded-md border-4 m-[0_auto] w-40 border-black text-3xl font-bold bg-white md:py-6 md:w-60"
            onClick={() => {
              setEndGame({ ...endGame, playing: true });
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
