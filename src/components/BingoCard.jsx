import React, { useEffect, useState } from "react";
import "./styles.css";
import { bingoWords } from "./bingoWords";

const FREE_SPACE = "FREE SPACE ⭐";
const squareWidth = 7;
const squareSize = Math.pow(squareWidth, 2)

const removeDuplicates = (arr) => {
  return arr.filter((value, index) => arr.indexOf(value) === index);
};

const maxArrayLength = (arr) => {
	return arr.length > squareSize ? arr.slice(0, squareSize) : arr
};

const BingoCard = () => {
  const [shuffledWords, setShuffledWords] = useState([]);

  useEffect(() => {
    const shuffledArray = shuffleArray(bingoWords.slice());
    shuffledArray.splice(Math.floor(squareSize / 2), 0, FREE_SPACE);
    const uniqueArray = removeDuplicates(shuffledArray);
    const maxArray = maxArrayLength(uniqueArray);
    setShuffledWords(maxArray);
  }, []);

  return (
    <div className={`bingo-card${squareWidth}`}>
      {shuffledWords.map((word, index) => (
        <div key={index} className="cell">
          {word}
        </div>
      ))}
    </div>
  );
};

const shuffleArray = (array) => {
  for (let currentIndex = array.length; currentIndex !== 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    const temporaryValue = array[currentIndex - 1];
    array[currentIndex - 1] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export default BingoCard;
