import React from "react";

const Stack = ({ questionsArr, questionObj }) => {


  return (
    <div className="col-start-2 flex flex-col-reverse bg-black  border-blue-400 border-4 ">
      {questionsArr.map((arr, i) => (
        <p
          key={i}
          className={`py-1 w-full text-center font-bold 
          ${(i + 1) % 5 === 0 && i !== 0 ? "text-white " : "text-orange-400"}
          ${i + 1 == questionObj.id ? "bg-blue-600 " : "bg-black "}`}
        >
          £{arr.worth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
      ))}
    </div>
  );
};

export default Stack;
