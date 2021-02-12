const page = document.querySelector('div');
let counter = 50;

const changeColors = (e) => {
  const direction = e.deltaY;
  if (direction > 0 && counter < 100) {
    counter += 2;
  } else if (direction < 0 && counter > 0) {
    counter -= 2;
  }

  page.style.backgroundColor = `hsl(0, 67%, ${counter}%)`;
  console.log(page.style.backgroundColor);
  console.log(counter);
};

page.addEventListener('wheel', (e) => changeColors(e));

console.log(page);