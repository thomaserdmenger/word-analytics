// Get DOM elements
const input = document.querySelector('.word__input');
const words = document.querySelector('.number__words');
const characters = document.querySelector('.number__characters');
const twitter = document.querySelector('.number__twitter');

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

// Count characters
const countCharacters = e => {
  const inputString = e.target.value;

  // Get the string's length
  const inputLength = inputString.length;

  // Display number of words to screen
  characters.textContent = inputLength;
};

input.addEventListener('keyup', countCharacters);

// Count Twitter
const countTwitter = e => {
  const inputString = e.target.value;
  const inputLength = inputString.length;
  const twitterLength = 280;

  // Decrement twitter's number
  const twitterCount = twitterLength - inputLength;

  // Display decrementation to screen
  twitter.textContent = twitterCount;

  if (twitterCount < 0) {
    twitter.classList.add('word__warning');
  } else {
    twitter.classList.remove('word__warning');
  }
};

input.addEventListener('keyup', countTwitter);
