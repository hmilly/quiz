import React from "react";
import Card from "../components/Card";
import LifeLines from "../components/LifeLines";
import Stack from "../components/Stack";
import Header from "../components/Header";

const start = () => {
  return (
    <main className="h-screen grid grid-cols-1 grid-rows-[100px_auto]">
      <Header />
      <div className="grid grid-cols-2 grid-rows-3">
        <Card />
        <LifeLines />
        <Stack />
      </div>
    </main>
  );
};

export default start;
