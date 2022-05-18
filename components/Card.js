import React from "react";

const Card = () => {
  return (
    <div className="row-start-3 grid grid-row-2 grid-col-1 justify-center text-white ">
      <h2 className="custom-border text-center">Question</h2>
      <div className="grid m-6 grid-cols-2 grid-rows-2 gap-20 align-center">
        <p className="custom-border px-4 ">q1</p>
        <p className="custom-border px-4">q2</p>
        <p className="custom-border px-4">q3</p>
        <p className="custom-border px-4">q4</p>
      </div>
    </div>
  );
};

export default Card;
