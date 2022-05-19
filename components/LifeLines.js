import React from "react";

const LifeLines = ({ hints, setHints }) => {
  const clicked = (h, i) => {
    console.log(h, i);
  };

  return (
    <div className="row-start-1 grid grid-cols-1 grid-rows-[1fr_2fr]">
      <section className="text-white grid grid-cols-3 justify-items-center content-center m-8">
        {hints.map((h, i) => (
          <button onClick={() => clicked(h, i)} key={i} disabled={h.used}>
            <p className="rounded-full border-6 bg-black border-blue-400 p-3 w-20 text-center">
              {h.name}
            </p>
          </button>
        ))}
      </section>
      {/* <img>
      </img> */}
    </div>
  );
};

export default LifeLines;
