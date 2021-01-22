let word = 'ABRAKADABRA';
let splittedWord = word.split('');



let originalLength = splittedWord.length

for (let i = splittedWord.length ; i > 0; i--) {
  splittedWord.splice(i, splittedWord.length-1);
  let diff = originalLength - splittedWord.length;
  // console.log(diff);
  let word = '';
  for (let j = originalLength - splittedWord.length; j>0; j--){
      // console.log(j);
      if (j%2===1) {
        word = ' ' + word;
      }
  }
  console.log(word + splittedWord.join(''));
}


