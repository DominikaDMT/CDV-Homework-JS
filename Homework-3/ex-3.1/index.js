const button = document.querySelector('button');

const getValues = (e) => {
  e.preventDefault();
  const inputs = document.getElementsByTagName('input');
  let path = '';
  let inputValues = [];
  for (input of inputs) {
    if (input.id === 'address') {
      path = input.value;
    } else {
      inputValues.push(`${input.id}=${input.value}`);
    }
  }
  document.open(path, 'newWindow', inputValues);
};

button.addEventListener('click', (e) => {
  getValues(e);
});