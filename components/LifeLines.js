import Image from "next/image";
import React from "react";

const LifeLines = ({ allHints, setAllHints, questionObj, setQuestionObj }) => {
  const selectLifeline = (hint, i) => {
    // Set new hints - disable used button
    const newHintsArr = [...allHints];
    newHintsArr[i] = { ...hint, used: true };
    setAllHints(newHintsArr);

    // find id of correct answer and other random id
    const correctID = questionObj.answers.indexOf(questionObj.correctAnswer);
    const randomID = () => {
      const r = 0;
      while (r === correctID) {
        r = Math.round(Math.random() * 4);
      }
      return r;
    };

    const generatedId = randomID();
    const newQuestionsArray = [...questionObj.answers];

    // Remove 2 wrong answers from the answers array
    newQuestionsArray.map((q, i) => {
      i !== generatedId && i !== correctID
        ? (newQuestionsArray[i] = "")
        : (newQuestionsArray[i] = q);
    });

    setQuestionObj({ ...questionObj, answers: newQuestionsArray });
  };

  return (
    <div className="row-start-1 grid grid-cols-[auto_1fr] grid-rows-1">
      <section className="text-white grid grid-cols-1fr grid-rows-3 items-center px-4">
        {allHints.map((hint, i) => (
          <button
            onClick={() => selectLifeline(hint, i)}
            key={i}
            disabled={hint.used}
            className={`rounded-full border-6 bg-black p-3 w-32 h-20 
          ${hint.used ? "border-red-900 line-through " : "border-blue-400 "}`}
          >
            {hint.name}
          </button>
        ))}
      </section>

      <div className=" self-center justify-self-center ">
        <Image
          loading="lazy"
          src="/quiz.jpg"
          alt="quiz"
          width="366px"
          height="366px"
          objectFit="contain"
        />
      </div>
      <p></p>
    </div>
  );
};

export default LifeLines;
