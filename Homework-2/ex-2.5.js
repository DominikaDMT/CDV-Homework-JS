const alphabet = 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ'.split('');
const code = 'CĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻAĄB'.split('');

// -------------- dwie oddzielne funkcje - wersja bez prompt i alertu --------------

// function encrypt(input) {
//   text = input.toUpperCase().split('');

//   const encryptedText = text.map(letter => {
//     if (letter === " ") {
//       return letter
//     }
//     let index = alphabet.indexOf(letter)
//     return code[index]
//   })
//   return encryptedText.join('')
// }

// function decrypt(input) {
//   text = input.toUpperCase().split('');

//   const decryptedText = text.map(letter => {
//     if (letter === " ") {
//       return letter
//     }
//     let index = code.indexOf(letter)
//     return alphabet[index]
//   })
//   return decryptedText.join('')
// }

// const encryptedText = encrypt('Nauka kodowania')
// console.log(encryptedText);
// console.log(decrypt(encryptedText));


// -------------- jedna funkcja --------------


const ZAKODUJ = 'ZAKODUJ';
const ODKODUJ = 'ODKODUJ';

const userInput = prompt('Podaj słowo do zakodowania lub odkodowania')
const codingType = prompt('Jeśli chcesz zakodować to słowo, wpisz "Z", jeśli chcesz odkodować, wpisz "O"').toUpperCase();

if (codingType === "Z") {
  key = ZAKODUJ;
} else if (codingType === "O") {
  key = ODKODUJ;
}

function encryptOrDecrypt(input, type) {
  text = input.toUpperCase().split('');

  const encryptedOrDecryptedText = text.map((letter) => {
    switch (type) {
      case ZAKODUJ:
        if (letter === ' ') {
          return letter;
        }
        let index = alphabet.indexOf(letter);
        return code[index];

      case ODKODUJ:
        if (letter === ' ') {
          return letter;
        }
        let i = code.indexOf(letter);
        return alphabet[i];
        
      default:
        break;
    }
  });
  return encryptedOrDecryptedText.join('');
}

alert('Wynik: ' + encryptOrDecrypt(userInput, key))

// console.log(encryptOrDecrypt('Nauka kodowania', ZAKODUJ));
// console.log(encryptOrDecrypt('ÓCZMC MRFRŹCÓLC', ODKODUJ));
