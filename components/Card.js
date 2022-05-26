import React, { useState, useEffect } from "react";

const Card = ({ analyseAnswer, questionObj: { question, answers } }) => {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBlocked(false);
    }, 3000);
  }, [blocked]);

  return (
    <div className="row-start-2 col-start-1 col-end-3 grid grid-row-2 py-2 grid-col-1 content-start gap-8 px-8 transition-colors duration-300 ease-in-out ">
      <h2 className="custom-border">{question}</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-14 gap-y-4 ">
        {answers.map((a, i) => (
          <button
            disabled={blocked}
            onClick={() => {
              setBlocked(true);
              analyseAnswer(a);
            }}
            // block buttons while new question set
            className={`custom-border ${
              blocked ? "bg-opacityBlack " : "bg-black "
            }`}
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
