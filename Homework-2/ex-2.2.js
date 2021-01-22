const number = prompt('Podaj liczbę')


function changeTheOrder(arg) {
  let array = (arg.toString().split(''));
  array.reverse();
  return parseInt(array.join(''));
}

let reversed = changeTheOrder(number)
alert(reversed);