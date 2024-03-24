import React from "react";
import BingoCard from "./components/BingoCard";
import { bingoRules } from "./constants";
import "./styles.css";

const squareWidth = 5;

const App = () => {
  return (
    <div className="App">
      <div className="bingo-card-container">
        <h1>Bingo</h1>
        {bingoRules}
        <BingoCard squareWidth={squareWidth} />
      </div>
    </div>
  );
};

export default App;
