import React, { useEffect, useState, useCallback } from "react";
import { bingoPhrases } from "./bingoPhrases";
import { removeDuplicates, maxArrayLength, shuffleArray, winningCombinations } from "../utils/index";
import "./styles.css";

const FREE_SPACE = "FREE SPACE ⭐";
const LOCAL_STORAGE_KEY = "bingoCardState";

const initialState = [ 
  { index: 0, isSelected: false, phraseId: 0 },
  { index: 1, isSelected: false, phraseId: 0 },
  { index: 2, isSelected: false, phraseId: 0 },
  { index: 3, isSelected: false, phraseId: 0 },
  { index: 4, isSelected: false, phraseId: 0 },
  { index: 5, isSelected: false, phraseId: 0 },
  { index: 6, isSelected: false, phraseId: 0 },
  { index: 7, isSelected: false, phraseId: 0 },
  { index: 8, isSelected: false, phraseId: 0 },
  { index: 9, isSelected: false, phraseId: 0 },
  { index: 10, isSelected: false, phraseId: 0 },
  { index: 11, isSelected: false, phraseId: 0 },
  { index: 12, isSelected: true, phraseId: 0 },
  { index: 13, isSelected: false, phraseId: 0 },
  { index: 14, isSelected: false, phraseId: 0 },
  { index: 15, isSelected: false, phraseId: 0 },
  { index: 16, isSelected: false, phraseId: 0 },
  { index: 17, isSelected: false, phraseId: 0 },
  { index: 18, isSelected: false, phraseId: 0 },
  { index: 19, isSelected: false, phraseId: 0 },
  { index: 20, isSelected: false, phraseId: 0 },
  { index: 21, isSelected: false, phraseId: 0 },
  { index: 22, isSelected: false, phraseId: 0 },
  { index: 23, isSelected: false, phraseId: 0 },
  { index: 24, isSelected: false, phraseId: 0 },
];

const BingoCard = ({ squareWidth = 5 }) => {
  const [shuffledWords, setShuffledWords] = useState([]);
  const [reshuffleCard, setReshuffleCard] = useState(true);
  const [isThereBingo, setIsThereBingo] = useState(false);
  const [cellState, setCellState] = useState(() => {
    const storedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedState ? JSON.parse(storedState) : initialState;
  });

  // check if cellState contains a winning combination
  //

  function isWinningCombination(combination, cellState) {
    for (let index of combination) {
      if (!cellState[index].isSelected) {
        return false;
      }
    }
    return true;
  }

  // Check if any winning combination exists in the cellState
  function hasWinningCombination(cellState, winningCombinations) {
    for (let combination of winningCombinations) {
      if (isWinningCombination(combination, cellState)) {
        return true;
      }
    }
    return false;
  }


  const squaredSize = Math.pow(squareWidth, 2);

  const saveStateToLocalStorage = useCallback((state) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, []);

  const handleClick = useCallback(() => {
    if (reshuffleCard) {
      const shuffledArray = shuffleArray(bingoPhrases.slice());
      // const shuffledArray = shuffleArray(Object.entries(bingoPhrasesObject));

      shuffledArray.splice(Math.floor(squaredSize / 2), 0, FREE_SPACE);
      const uniqueArray = removeDuplicates(shuffledArray);
      const maxArray = maxArrayLength(uniqueArray, squaredSize);
      setShuffledWords(maxArray);
      setCellState(initialState);
    } else {
      setReshuffleCard(true);
    }
  }, [reshuffleCard, squaredSize]);

  useEffect(() => {
    handleClick();
  }, [squaredSize, handleClick]);

	useEffect(() => {
		if (hasWinningCombination(cellState, winningCombinations)) {
			console.log("There is a winning combination!");
			setIsThereBingo(true)
		} else {
			console.log("No winning combination found.");
			setIsThereBingo(false)
		}
		}, [cellState]);

  useEffect(() => {
    saveStateToLocalStorage(cellState);
  }, [cellState, saveStateToLocalStorage]);

  const handleCellClick = (index) => {
    if (index === Math.floor(squaredSize / 2)) {
      return;
    }
    setCellState((prevState) =>
      prevState.map((cell, i) =>
        i === index ? { ...cell, isSelected: !cell.isSelected } : cell
      )
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cellState));
  };
  // localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(cellState));
  // console.log("cellState:", cellState);
  return (
    <>
		{isThereBingo && <div className='winner'>BINGO!</div>}
		
      <div className={`bingo-card${squareWidth}`}>
        {shuffledWords.map((phrase, index) => (
          <div
            key={index}
            className={`cell ${
              cellState[index]?.isSelected ? "selected-cell" : ""
            }`}
            onClick={() => handleCellClick(index)}>
            {phrase}
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Reshuffle Card</button>
    </>
  );
};

export default BingoCard;
