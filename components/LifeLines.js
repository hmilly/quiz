import React from "react";

const LifeLines = ({
  allHints,
  setAllHints,
  answers,
  correctAnswer,
  setCurrentQuestion,
}) => {
  const selectLifeline = (hint, i) => {
    const newArr = [...allHints];
    newArr[i] = { ...hint, used: true };
    setAllHints(newArr);
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
      {/* <img>
      </img> */}
    </div>
  );
};

export default LifeLines;
