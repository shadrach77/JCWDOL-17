//Exercise 1

function columnToNumber(column) {
  const columnNumbers = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const splitColumn = column.toLowerCase().split("");

  let finalColumn = 0;

  for (let i = 0; i < splitColumn.length; i++) {
    if (i != splitColumn.length - 1) {
      finalColumn += 26 * (columnNumbers.indexOf(splitColumn[i]) + 1);
    } else finalColumn += columnNumbers.indexOf(splitColumn[i]) + 1;
  }

  return finalColumn;
}

console.log(columnToNumber("BA"));

//Exercise 2

function findUniqueValue(arr) {
  const sortedArray = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    if (
      sortedArray[i] !== sortedArray[i + 1] &&
      sortedArray[i] !== sortedArray[i - 1]
    ) {
      return sortedArray[i];
    }
  }
}

console.log(findUniqueValue([2, 2, 5, 2, 5, 7, 3, 3, 2]));

// Exercise 3

function checkAnagram(inputS, inputT) {
  const objectS = inputS.split("").reduce((acc, value) => {
    if (!acc[value]) {
      acc[value] = 1;
    } else acc[value] += 1;
    return acc;
  }, {});

  const objectT = inputT.split("").reduce((acc, value) => {
    if (!acc[value]) {
      acc[value] = 1;
    } else acc[value] += 1;
    return acc;
  }, {});

  return checkObjects(objectS, objectT);

  function checkObjects(objectS, objectT) {
    const objectSEntries = Object.entries(objectS);

    for (let [key, value] of objectSEntries) {
      if (objectT[key] !== value) {
        return false;
      }
    }
    return true;
  }
}

console.log(checkAnagram("abc", "cbaa"));

// Exercise 4

function staircasePermutation(n) {
  let currValue = 1;
  let lastValue = 0;
  let counter = 0;

  function fibonacci() {
    let temp = currValue;
    currValue = lastValue + currValue;
    lastValue = temp;
    counter++;
  }

  while (counter < n) {
    fibonacci();
  }

  return currValue;
}

console.log(staircasePermutation(3));
