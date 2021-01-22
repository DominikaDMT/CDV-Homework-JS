const word1 = prompt('Podaj pierwsze słowo').split('');
const word2 = prompt('Podaj drugie słowo').split('');

const sorting = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};



if (!(word1.length === word2.length)) {

  alert('Te słowa nie są anagramami!');
  
} else {
  word1.sort(sorting);
  word2.sort(sorting);

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      alert('Te słowa nie są anagramami!');
      break;
    }
    else if (i === word1.length-1) {
      alert('Te słowa są anagramami!');
    }
  }
}

