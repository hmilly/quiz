import React, { useState, useEffect } from "react";

const Card = ({ analyseAnswer, questionObj: { question, answers } }) => {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBlocked(false);
    }, 3000);
  }, [blocked]);

  return (
    <div className="grid grid-row-2 grid-col-1 content-start items-center gap-8 p-2 md:p-8 transition-colors duration-300 ease-in-out ">
      <span className="custom-border custom-extended flex items-center justify-center">
        <h2>{question}</h2>
      </span>
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-x-14 gap-y-4 ">
        {answers.map((a, i) => (
          <button
            disabled={blocked}
            onClick={() => {
              setBlocked(true);
              analyseAnswer(a);
            }}
            // block buttons while new question set
            className={`custom-border custom-hover hover:bg-opacityBlack focus:border-red-700
            ${blocked ? "bg-opacityBlack cursor-not-allowed" : "bg-black "}`}
            key={i}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
