const addItemButton = document.getElementById('add');
const setToBoughtButton = document.getElementsByClassName('bought');
const itemInput = document.getElementById('item');
const amountInput = document.getElementById('amount');
const itemList = document.getElementById('itemList');
const warning = document.getElementById('warning');

const addItem = () => {
  const itemName = itemInput.value;
  const amount = amountInput.value;
  const data = `${amount},active`;

  if (itemName === '' || amount == '') {
    console.log('fff');
    return;
  } else {
    localStorage.setItem(itemName, data);
    showInDOM(itemName, amount, localStorage.getItem(itemName).split(',')[1]);
    itemInput.value = '';
    amountInput.value = '';
    warning.innerHTML = '';
  }
};

const getlist = () => {
  const keys = Object.keys(localStorage);
  for (key of keys) {
    let data = localStorage.getItem(key).split(',');
    showInDOM(key, data[0], data[1]);
  }
};

const showInDOM = (itemName, amount, className) => {
  const li = document.createElement('li');
  const strong = document.createElement('strong');
  li.setAttribute('class', className);
  li.setAttribute('name', itemName);
  strong.textContent = `${itemName} - ${amount} pcs.`;

  const buttonNames = ['copy', 'delete', 'bought'];
  const buttons = [];

  for (button of buttonNames) {
    let btn = document.createElement('button');
    btn.setAttribute('class', button);
    btn.textContent = button.charAt(0).toUpperCase() + button.slice(1);

    if (
      localStorage.getItem(itemName).split(',')[1] === 'done' &&
      button === 'bought'
    ) {
      btn.disabled = true;
    }

    buttons.push(btn);
  }

  const addListener = (btn, arg) => {
    return btn.addEventListener('click', (e) => handleClickEvent(e, arg));
  };

  addListener(buttons[0], 'clone');
  addListener(buttons[1], 'delete');
  addListener(buttons[2], 'changeToBought');

  li.append(strong);

  for (button of buttons) {
    li.append(button);
  }

  itemList.append(li);
};

const handleClickEvent = (e, type) => {
  const article = e.target.parentElement.attributes['name'].value;
  const el = document.getElementsByName(article)[0];
  const amount = localStorage.getItem(article).split(',')[0];
  console.log(amount);

  switch (type) {
    case 'clone':
      cloneEl(e, article, el, amount);
      break;
    case 'delete':
      deleteEl(article, el);
      break;
    case 'changeToBought':
      changeToBought(e, article, el, amount);
      break;
    default:
      break;
  }
};

const cloneEl = (e, article, el, amount) => {
  amountInput.value = amount;
  itemInput.value = article;

  warning.innerHTML = `Create cloned item by adding it to the shopping list. <br>
  You can edit values below.`;
};

const deleteEl = (article, el) => {
  el.parentElement.removeChild(el);
  localStorage.removeItem(article);
};

const changeToBought = (e, article, el, amount) => {
  el.setAttribute('class', 'done');
  localStorage.setItem(article, `${amount},done`);
  e.target.disabled = true;
};

addItemButton.addEventListener('click', (e) => addItem(e));
document.addEventListener('DOMContentLoaded', getlist);