const userInput = prompt('Podaj liczbę, sprawdzimy ile wynosi liczba trójkątna o takim numerze')

function isTriangular(number) {

  // ----------- Przekształcony wzór na siłę -----------
  // function add(n) {
  //   if (n === 0 || n === 1) return 1;
  //   else {
  //     let result = n + add(n - 1);
  //     return result;
  //   }
  // }


  const triangularNumber =  ((number*(number+1))/2);
  const forTetrahedralNumbers = [1, 3, 8, 20, 34] 
  const TetrahedralNumbers = [1, 10, 120, 1540, 7140] 

  if (Number.isInteger(Math.sqrt(((8 * triangularNumber) + 1)))) {
    if (TetrahedralNumbers.includes(triangularNumber)) {
      alert(`Liczba T-${number} jest liczbą trójkątną i wynosi ${triangularNumber} - wartość tą można też przedstawić jako liczbę czworościenną T-${forTetrahedralNumbers[TetrahedralNumbers.findIndex(num => num === triangularNumber)]}`);
    } else {
    alert(`Liczba T-${number} jest liczbą trójkątną i wynosi ${triangularNumber}`);}
  } else {
    alert(`Liczba T-${number} nie jest liczbą trójkątną`);
  }

  // console.log(TetrahedralNumbers.indexOf(triangularNumber));

}

isTriangular(parseInt(userInput))


