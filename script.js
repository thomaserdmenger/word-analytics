// Get DOM elements
const input = document.querySelector('.word__input');
const words = document.querySelector('.number__words');

// Count words
const countWords = e => {
  const inputString = e.target.value;

  // Turn into array and get rid of unnecessary blanks
  const inputArray = inputString.split(' ').filter(word => word);
  const inputWords = inputArray.length;

  // Display number of words to screen
  words.textContent = inputWords;
};

input.addEventListener('keyup', countWords);
