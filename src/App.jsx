import React from "react";
import BingoCard from "./components/BingoCard";
import { bingoRules } from "./constants";
import "./styles.css";

const squareWidth = 5;

const App = () => {
  return (
    <div className="App">
      <div className="bingo-card-container">
        <h1>Wedding Band Bingo</h1>
        <BingoCard squareWidth={squareWidth} />
        {bingoRules}
      </div>
    </div>
  );
};

export default App;
