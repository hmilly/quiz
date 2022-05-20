import React from "react";

const Stack = ({ questionsArr }) => {
  return (
    <div className="col-start-2 flex flex-col-reverse  border-blue-400 border-4  bg-black">
      {questionsArr.map((arr, i) => (
        <p
          key={i}
          className={`py-1 w-full text-center ${
            i % 5 === 0 && i !== 0 ? "text-white " : "text-orange-400"
          }`}
        >
          {arr.worth}
        </p>
      ))}
    </div>
  );
};

export default Stack;
