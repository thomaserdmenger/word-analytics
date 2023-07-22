// Get DOM elements
const input = document.querySelector('.word__input');
const words = document.querySelector('.number__words');
const characters = document.querySelector('.number__characters');
const twitter = document.querySelector('.number__twitter');
const facebook = document.querySelector('.number__facebook');

// Count words
const countWords = e => {
  const inputString = e.target.value;

  // Turn into array and get rid of unnecessary blanks
  const inputArray = inputString.split(' ').filter(word => word);
  const inputWords = inputArray.length;

  // Display number of words to screen
  words.textContent = inputWords;
};

input.addEventListener('input', countWords);

// Count characters
const countCharacters = e => {
  const inputString = e.target.value;

  // Get the string's length
  const inputLength = inputString.length;

  // Display number of words to screen
  characters.textContent = inputLength;
};

input.addEventListener('input', countCharacters);

// Count Twitter
const countTwitter = e => {
  const inputString = e.target.value;
  const inputLength = inputString.length;
  const twitterLength = 280;

  // Decrement twitter's number
  const twitterCount = twitterLength - inputLength;

  // Display decrementation to screen
  twitter.textContent = twitterCount;

  // Warning if number < 0
  if (twitterCount < 0) {
    twitter.classList.add('word__warning');
  } else {
    twitter.classList.remove('word__warning');
  }
};

input.addEventListener('input', countTwitter);

// Count Facebook
const countFacebook = e => {
  const inputString = e.target.value;
  const inputLength = inputString.length;
  const facebookLength = 2200;

  // Decrement facebook's number
  const facebookCount = facebookLength - inputLength;

  // Display decrementation to screen
  facebook.textContent = facebookCount;

  // Warning if number < 0
  if (facebookCount < 0) {
    facebook.classList.add('word__warning');
  } else {
    facebook.classList.remove('word__warning');
  }
};

input.addEventListener('input', countFacebook);

// Input validation
const handleValidation = e => {
  if (e.target.value.includes('<script>')) {
    alert('Invalid Input');
    e.target.value = e.target.value.replace('<script>', '');
  }
};

input.addEventListener('input', handleValidation);
