import React, { useState } from "react";

const Card = () => {

  return (
    <div className="row-start-2 col-start-1 col-end-3 grid grid-row-2 grid-col-1 content-center gap-8 px-8  text-white ">
      <h2 className="custom-border">Question</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-14 gap-y-2 px-30">
        <p className="custom-border ">q1</p>
        <p className="custom-border">q2</p>
        <p className="custom-border">q3</p>
        <p className="custom-border">q4</p>
      </div>
    </div>
  );
};

export default Card;
