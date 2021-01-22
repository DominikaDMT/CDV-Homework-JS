const userInput = prompt('Podaj słowo')

function permutacje(word) {
  wordAsAnArray = word.split('')
  const permutations = []
  

  function permute(wordAsAnArray, temporaryArray = []) {
      if (wordAsAnArray.length === 0) {
        permutations.push(temporaryArray.join(''))
      } else {
        for (let i = 0; i < wordAsAnArray.length; i++) {
          let letter = wordAsAnArray[i];
          let newArray = wordAsAnArray.filter(letterInArray => letterInArray !== letter)
          permute(newArray, temporaryArray.concat(letter))
        }
    }
    return permutations
  }

  alert('Wynik permutacji w konsoli...')
  return permute(wordAsAnArray)
}

console.log(permutacje(userInput));