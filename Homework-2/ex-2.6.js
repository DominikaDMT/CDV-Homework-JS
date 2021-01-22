// 2 ^ n - 1
let disks = prompt('Podaj liczbę dysków')

// ------------ bez rekurencji ------------

// function powerOf (x, n) {
//   let result = 1

//   for (let i=0; i< n; i++) {
//     result *= x
//   }
//   return result
// }

// console.log(powerOf(2,3));

// ------------ rekurencja ------------

function exponentiation (n) {
  let x = 2

  if (n === 1) {
    return x
  }

  return x * exponentiation(n-1)

}


alert(`Aby rozwiązać problem wieży Hanoi z ${disks} krążkami, należy wykonać ${exponentiation(disks)-1} kroków`)

// console.log(powerOf(5));

