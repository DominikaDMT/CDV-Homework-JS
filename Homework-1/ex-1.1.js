const numbers = prompt('Podaj liczby, dla których chcesz policzyć średnią');
// const numbersInArray = [numbers];

if (numbers.length) {
  let splittedNumbers = numbers.split(', ');
  if (splittedNumbers[0] === [numbers][0]) {
    splittedNumbers = numbers.split(',');
    if (splittedNumbers[0] === [numbers][0]) {
      splittedNumbers = numbers.split(' ');
    }
  }

  // ------------ podmiana litery na 0 ------------
  
  // const average = (splittedNumbers.reduce((sum, number) => {
    //   if (isNaN(parseInt(number))) {
      //     number = 0
      //   }
      //   return sum + +number
      
      // }, 0)) / splittedNumbers.length
      // alert(`Średnia z podanych liczb wynosi ${average}`);
      
      
  // ------------ zignorowanie litery ------------
  
  splittedNumbers = splittedNumbers.filter((input) => {
    return !(isNaN(parseInt(input)))
  })
  
  let sum = 0;
  for (let i = 0; i < splittedNumbers.length; i++) {
    if (isNaN(parseInt(splittedNumbers[i]))) {
      continue;
    }
    sum += +splittedNumbers[i]
  }
  const average = sum/splittedNumbers.length
  alert(`Średnia z podanych liczb wynosi ${average}`);


}
