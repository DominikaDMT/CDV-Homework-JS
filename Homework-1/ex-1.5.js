const word = prompt('Podaj słowo, sprawdzimy czy jest palindromem...').split('');

const reversedWord = [...word].reverse();

for (let i = 0; i < word.length; i++) {
  if (word[i] !== reversedWord[i]) {
    alert('To słowo nie jest palindromem!');
    break;
  } else if (i === word.length - 1) {
    alert('To słowo jest palindromem!');
  }
}
