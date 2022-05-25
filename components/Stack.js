import React from "react";

const Stack = ({ questionsArr, questionObj, endGame, formatMoney }) => {
  const takeMoney = () => {
    const findWorth = questionsArr.find((q) => q.id === questionObj.id - 1);
    findWorth !== undefined
      ? endGame("Thanks for playing!", findWorth.worth)
      : "";
  };

  return (
    <div className="col-start-2 flex flex-col-reverse  border-blue-400 border-4 ">
      {questionsArr.map((arr, i) => (
        <span
          key={i}
          // highlight row starting from after the first q
          className={`flex flex-row py-1 font-bold text-white 
        ${
          i + 2 == questionObj.id
            ? "bg-blue-600 transition-colors duration-300 ease-in-out"
            : "bg-black "
        }`}
        >
          <p className="w-1/3 text-center">{i + 1}</p>
          <p
            className={`
          ${(i + 1) % 5 === 0 && i !== 0 ? "text-white " : "text-orange-400"}
         `}
          >
            £{formatMoney(arr.worth)}
          </p>
        </span>
      ))}
      <button
        className="text-black font-bold order-first py-4 bg-yellow-500 rounded-md border-2 border-black"
        onClick={() => {
          takeMoney();
        }}
      >
        Take Money
      </button>
    </div>
  );
};

export default Stack;
