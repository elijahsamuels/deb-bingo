export const removeDuplicates = (arr) => {
  return arr.filter((value, index) => arr.indexOf(value) === index);
};

export const maxArrayLength = (arr, squareSize) => {
	return arr.length > squareSize ? arr.slice(0, squareSize) : arr
};

export const shuffleArray = (array) => {
  for (let currentIndex = array.length; currentIndex !== 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    const temporaryValue = array[currentIndex - 1];
    array[currentIndex - 1] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const winningCombinations = [
  // horizontal bingos
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],

  // vertical bingos
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],

  // cross bingos
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
];
