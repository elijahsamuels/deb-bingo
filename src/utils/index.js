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
