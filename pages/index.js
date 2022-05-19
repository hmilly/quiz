import React, { useState } from "react";
import Card from "../components/Card";
import LifeLines from "../components/LifeLines";
import Stack from "../components/Stack";
import Header from "../components/Header";

const Start = () => {
  const [questions, setQuestions] = useState({});
  const [currentQ, setCurrentQuestion] = useState({});
  const [hints, setHints] = useState([{name: "50/50", used: false}, {name: "Hint 1", used: false}, {name: "Hint 2", used: false}]);

  return (
    <main className="h-screen grid grid-cols-1 bg-gray-900 grid-rows-[50px_auto]">
      <Header />
      <div className="grid grid-cols-[2fr_1fr] grid-rows-[3fr_2fr]">
        <Card currentQ={currentQ} />
        <LifeLines hints={hints} setHints={setHints} />
        <Stack currentQ={currentQ} />
      </div>
    </main>
  );
};

export default Start;
