import React, { useState, useEffect } from "react";
import { formatMoney } from "../fns/functions";

const Stack = ({ questionsArr, questionObj, setEndGame }) => {
  const [disableBtn, setDisableBtn] = useState(true);

  useEffect(() => {
    if (questionObj.id !== 1) {
      setDisableBtn(false);
    }
  }, [questionObj]);

  const takeMoney = () => {
    const findWorth = questionsArr.find((q) => q.id === questionObj.id - 1);
    if (findWorth !== undefined)
      setEndGame({
        playing: false,
        msg: `Thanks for playing! You took: £${findWorth.worth}`,
      });
  };

  return (
    <div className="flex flex-col-reverse justify-around w-4/5 border-blue-400 border-4 bg-black">
      {questionsArr.map((arr, i) => (
        <span
          key={i}
          // Highlight amount won AFTER each q is answered correctly
          className={`flex font-bold text-white
        ${
          i + 2 == questionObj.id
            ? "bg-blue-600 transition-colors duration-300 ease-in-out"
            : "bg-black hidden sm:flex "
        }`}
        >
          <p className="w-1/2 sm:w-1/3 text-center">{i + 1}</p>
          <p
            // White text for every 5th amount
            className={`w-1/2  sm:w-2/3
          ${(i + 1) % 5 === 0 && i !== 0 ? "text-white " : "text-orange-400"}
         `}
          >
            £{formatMoney(arr.worth)}
          </p>
        </span>
      ))}
      <button
        className={`w-full text-black font-bold order-first py-4 ${
          disableBtn ? "bg-gray-400" : "bg-yellow-500 "
        } rounded-md border-2 border-black`}
        onClick={() => takeMoney()}
        disabled={disableBtn}
      >
        {disableBtn ? "Pick an answer to start" : "Take Money"}
      </button>
    </div>
  );
};

export default Stack;
