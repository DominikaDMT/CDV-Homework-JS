// http://127.0.0.1:5500/2-15.11/Homework/index.html

const number = parseInt(prompt('Podaj długość boku trójkąta'));


let line = "*"
let i = 0;

do {
  console.log(line);
  line += "**"
  i++;
} while (i < number)
