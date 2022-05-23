import React, { useState } from "react";
import Card from "../components/Card";
import LifeLines from "../components/LifeLines";
import Stack from "../components/Stack";
import Header from "../components/Header";
import { questionsArr } from "../public/questions";

const Start = () => {
  const [questionObj, setQuestionObj] = useState(questionsArr.set_1[0]);

  const [allHints, setAllHints] = useState([
    { name: "50/50", used: false },
    { name: "Hint 1", used: false },
    { name: "Hint 2", used: false },
  ]);


  const analyseAnswer = (a) => {
    a === questionObj.correctAnswer ? alert("well Done") : alert("crap");
    const id = parseInt(questionObj.id);

    setTimeout(() => {
      id + 1 <= 15
        ? setQuestionObj(questionsArr.set_1[id])
        : setQuestionObj(questionsArr.set_1[0]);
    }, 2000);
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
        />
        <Stack questionsArr={questionsArr.set_1} questionObj={questionObj} />
      </div>
    </main>
  );
};

export default Start;
