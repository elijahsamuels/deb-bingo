import React from "react";
import BingoCard from "./components/BingoCard";
import "./styles.css";

const bingoRules = (
  <div className="bingo-rules">
    <div>
      Winning Patterns: The goal of the game is to complete a specific pattern
      on the bingo card. The most common winning patterns include:
    </div>
    <div>
      Single Line: Mark off all the numbers in a horizontal, vertical, or
      diagonal line.
    </div>
    <div>
      Announcing the Winner: The game continues until a player successfully
      completes the winning pattern and calls out "Bingo!" to indicate their
      win. The caller then verifies the winning card to confirm the win.
    </div>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <div className="bingo-card-container">
        <h1>Bingo</h1>
        {bingoRules}
        <BingoCard />
      </div>
    </div>
  );
};

export default App;