const stringData = 'abc';
const numberData = 1;
const booleanData = true;
let undefinedData;
const objectData = new Date();
const promiseData = fetch('https://api.github.com/users/juszczak');
const arrayData = [];
const objData = {};
const nullData = null;


const checkType = (data) => {
  if (typeof data === 'object' && data !== null){
    console.log(typeof data, data.constructor.name);
  } else if (typeof data === 'object' && data === null) {
    console.log(`wartość ${data} jest typu ${typeof data}`);
  } else {
    console.log(typeof data);
  }
}

checkType(stringData)
checkType(numberData)
checkType(booleanData)
checkType(undefinedData)
checkType(objectData)
checkType(promiseData)
checkType(arrayData)
checkType(objData)
checkType(nullData)