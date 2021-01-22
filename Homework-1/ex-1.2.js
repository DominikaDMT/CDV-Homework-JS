const year = parseInt(prompt('Wpisz rok'));

let isLeap;

const currentYear = new Date().getFullYear();

if (parseInt(year) % 4 === 0) {
  isLeap = true;
} else {
  isLeap = false;
}

alert(`Rok ${year} ${year < currentYear ? "był" : "będzie"} rokiem ${isLeap ? "przestępnym" : "nieprzestępnym"}`)