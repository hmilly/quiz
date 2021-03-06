import Image from "next/image";
import React from "react";

const LifeLines = ({ allHints, setAllHints, questionObj, setQuestionObj }) => {
  const updateLifelines = (hint, i) => {
    // Set new hints - disable used button
    const newHintsArr = [...allHints];
    newHintsArr[i] = { ...hint, used: true };
    setAllHints(newHintsArr);
  };

  const manageHints = (hints, i) => {
    // find id of correct answer and other random id
    const correctID = questionObj.answers.indexOf(questionObj.correctAnswer);
    const randomID = (r = 0) => {
      while (r === correctID) r = Math.round(Math.random() * 3);
      return r;
    };
    const generatedId = randomID();
    const newQuestionsArray = [...questionObj.answers];

    // check if hint has been used this turn
    const unusedHint = questionObj.answers.every((a) => a.length > 1);
    // Remove 2 wrong answers from the array
    if (unusedHint) {
      newQuestionsArray.map((q, i) => {
        i !== generatedId && i !== correctID
          ? (newQuestionsArray[i] = "")
          : (newQuestionsArray[i] = q);
      });

      setQuestionObj({ ...questionObj, answers: newQuestionsArray });
      updateLifelines(hints, i);
    }
  };

  return (
    <div className="grid grid-cols-[auto_1fr] gap-2">
      <section className="text-white grid grid-cols-3 xs:grid-cols-1 xs:grid-rows-3 items-center">
        {allHints.map((hint, i) => (
          <button
            onClick={() => manageHints(hint, i)}
            key={i}
            disabled={hint.used}
            className={`rounded-full border-4 bg-black h-14 w-20 md:h-20 md:w-32 m-2 
          ${hint.used ? "border-red-900 line-through " : "border-blue-400 "}`}
          >
            {hint.name}
          </button>
        ))}
      </section>
      <div className="justify-self-center self-center hidden xs:block">
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
