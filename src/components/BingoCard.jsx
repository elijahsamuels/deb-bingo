import React, { useEffect, useState, useCallback } from "react";
import { bingoWords } from "./bingoWords";
import { removeDuplicates, maxArrayLength, shuffleArray } from "../utils/index";
import "./styles.css";

const FREE_SPACE = "FREE SPACE ⭐";

const BingoCard = ({ squareWidth }) => {
  const [shuffledWords, setShuffledWords] = useState([]);
  const [reshuffleCard, setReshuffleCard] = useState(true);
  const squareSize = Math.pow(squareWidth, 2);

  const handleClick = useCallback(() => {
    if (reshuffleCard) {
      console.log("reshuffleCard:", reshuffleCard);
			const shuffledArray = shuffleArray(bingoWords.slice());
			shuffledArray.splice(Math.floor(squareSize / 2), 0, FREE_SPACE);
			const uniqueArray = removeDuplicates(shuffledArray);
			const maxArray = maxArrayLength(uniqueArray, squareSize);
			setShuffledWords(maxArray);
      // setReshuffleCard(false)
    } else {
			console.log('else / false:', false);
			// console.log("e:", e);
			// setReshuffleCard(true); // if you want to turn it back on
		}
  }, [reshuffleCard, squareSize]); // Re-create the function if count changes


  useEffect(() => {
		handleClick()
  }, [squareSize, handleClick]);

  return (
    <>
      <button onClick={handleClick}>
        Reshuffle Card
      </button>
      <div className={`bingo-card${squareWidth}`}>
        {shuffledWords.map((word, index) => (
          <div key={index} className="cell">
            {word}
          </div>
        ))}
      </div>
    </>
  );
};

export default BingoCard;
