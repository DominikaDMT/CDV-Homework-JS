const number = parseInt(prompt('Wprowadź liczbę'));

for (let i = number; i>0; i--) {
  let line = ''
  for (let j = 2*number; j > 0; j--) {
    line += '*'
  }
  console.log(line);
}

