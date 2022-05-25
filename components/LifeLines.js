import Image from "next/image";
import React from "react";

const LifeLines = ({ allHints, setAllHints, questionObj, setQuestionObj }) => {
  const manageHints = (hints, i) => {
    // find id of correct answer and other random id
    const correctID = questionObj.answers.indexOf(questionObj.correctAnswer);
    const randomID = (r = 0) => {
      while (r === correctID) r = Math.round(Math.random() * 3);
      return r;
    };
    const generatedId = randomID();
    const newQuestionsArray = [...questionObj.answers];

    // Remove 2 wrong answers from the array
    newQuestionsArray.map((q, i) => {
      i !== generatedId && i !== correctID
        ? (newQuestionsArray[i] = "")
        : (newQuestionsArray[i] = q);
    });

    setQuestionObj({ ...questionObj, answers: newQuestionsArray });
    updateLifelines(hints, i);
  };

  const updateLifelines = (hint, i) => {
    // Set new hints - disable used button
    const newHintsArr = [...allHints];
    newHintsArr[i] = { ...hint, used: true };
    setAllHints(newHintsArr);
  };

  return (
    <div className="row-start-1 grid grid-cols-[auto_1fr] grid-rows-1">
      <section className="text-white grid grid-cols-1fr grid-rows-3 items-center px-4">
        {allHints.map((hint, i) => (
          <button
            onClick={() => manageHints(hint, i)}
            key={i}
            disabled={hint.used}
            className={`rounded-full border-6 bg-black p-3 w-32 h-20 
          ${hint.used ? "border-red-900 line-through " : "border-blue-400 "}`}
          >
            {hint.name}
          </button>
        ))}
      </section>
      <div className="justify-self-center self-center">
        <Image
          loading="lazy"
          src="/quiz.jpg"
          alt="quiz"
          width="366px"
          height="366px"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default LifeLines;
