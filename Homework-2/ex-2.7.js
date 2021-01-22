const collectedItems=[];
function flatten (arr) {

  for (item of arr) {
    if (item instanceof Array) {
      flatten(item)
    } else {
      collectedItems.push(item)
    }
  }

  return collectedItems

}


// const someArray = [[1, 2], [3, 4]];
const someArray2 = [1, [2], [[3, 4], [5]]];

// console.log(flatten(someArray));
console.log(flatten(someArray2));