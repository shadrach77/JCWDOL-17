// Exercise 1.1

function arrayValues(arr) {
  console.log("Exercise 1.1");

  const total = arr.reduce((total, v) => {
    return (total += v);
  }, 0);

  console.log(
    `lowest: ${Math.min(...arr)}, highest: ${Math.max(...arr)}, average: ${
      total / arr.length
    }`
  );
}

arrayValues([12, 5, 23, 18, 4, 45, 32]);

// Exercise 1.2

function concatenation(arr) {
  let newArr = [...arr];
  newArr[newArr.length - 1] = "and " + newArr.at(-1);
  console.log("Exercise 1.2");
  console.log(newArr.join());
}

concatenation(["apple", "banana", "cherry", "date"]);

// Exercise 1.3

function secondFromLowest(arr) {
  let repeat = false;

  do {
    repeat = false;
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i - 1] > arr[i]) {
        arr.splice(i - 1, 0, arr[i]);
        arr.splice(i + 1, 1);
        repeat = true;
      }
    }
  } while (repeat);

  console.log("Exercise 1.3");
  console.log(arr[1]);
}

secondFromLowest([15, 3, 1, 7, 2, 6]);

// Exercise 1.4

function addArrayValues(arr1, arr2) {
  const newArr = arr1.map((v, i) => {
    return (v += arr2[i]);
  });
  console.log("Exercise 1.4");
  console.log(newArr);
}

addArrayValues([1, 2, 3], [3, 2, 1]);

// Exercise 1.5

function addNewUniqueElement(arr, newElement) {
  if (newElement != arr[arr.length - 1]) {
    arr.push(newElement);
  }

  console.log("Exercise 1.5");
  console.log(arr);
}

addNewUniqueElement([1, 2, 3], 4);

// Exercise 2.1

function returnNumberInArray(array) {
  const total = array.reduce((acc, v) => {
    if (typeof v === "number") {
      return (acc += v);
    }
    return acc;
  }, 0);
  console.log("Exercise 2.1");
  console.log(total);
}

returnNumberInArray(["3", 1, "string", null, false, undefined, 2]);

// Exercise 2.2

function maxSizeArray(maxSize, ...args) {
  const newMaxArray = [];
  let counter = 0;

  [...args].forEach((v) => {
    if (counter < maxSize) {
      newMaxArray.push(v);
      counter++;
    }
  });

  console.log("Exercise 2.2");
  console.log(newMaxArray);
}

maxSizeArray(5, 5, 10, 24, 3, 6, 7, 8);

// Exercise 2.3 (1)

function combineArrays(arr1, arr2) {
  console.log("Exercise 2.3 (1)");
  console.log([...arr1, ...arr2]);
}

combineArrays([1, 2, 3], [4, 5, 6]);

// Exercise 2.4 (2)

function findDuplicateValues(arr) {
  const duplicateValues = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j && !duplicateValues.includes(arr[i])) {
        duplicateValues.push(arr[i]);
        arr.splice(j, 1);
      }
    }
  }
  console.log("Exercise 2.4 (2)");
  console.log(duplicateValues);
}

findDuplicateValues([1, 2, 2, 2, 2, 3, 3, 4, 5, 5]);

// Exercise 2.5 (3)

function findUniqueValues(arr1, arr2) {
  const uniqueValues = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      uniqueValues.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!arr1.includes(arr2[j])) {
      uniqueValues.push(arr2[j]);
    }
  }
  console.log("Exercise 2.5 (3)");
  console.log(uniqueValues);
}

findUniqueValues([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

// Exercise 3.1

function returnPrimitiveData(arr) {
  const primitiveValues = arr.filter((v) => {
    if (
      typeof v === "string" ||
      typeof v === "number" ||
      typeof v === "boolean" ||
      typeof v == null ||
      typeof v == undefined ||
      typeof v == NaN
    ) {
      return v;
    }
  });
  console.log("Exercise 3.1");
  console.log(primitiveValues);
}

returnPrimitiveData([1, [], undefined, {}, "string", {}, []]);

// Exercise 3.2

function addDuplicateValues(arr) {
  const duplicateValues = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j && !duplicateValues.includes(arr[i])) {
        duplicateValues.push(arr[i]);
        arr.splice(j, 1);
      }
    }
  }
  console.log("Exercise 3.2");
  console.log(
    duplicateValues.reduce((acc, v) => {
      return (acc += v);
    }, 0)
  );
}

addDuplicateValues([1, 2, 2, 2, 2, 3, 3, 4, 5, 5]);

// Exercise 3.3

function rockPaperScissor(move) {
  const possibleMoves = ["rock", "paper", "scissor"];

  const randomNumber = Math.random();
  let computerMove;

  if (randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }

  console.log("Exercise 3.3");

  if (move.toLowerCase().trim() === "rock") {
    if (computerMove === "rock") {
      console.log(`Computer chose ${computerMove}. You have tied.`);
    } else if (computerMove === "paper") {
      console.log(`Computer chose ${computerMove}. You have lost.`);
    } else console.log(`Computer chose ${computerMove}. You have won.`);
  }

  if (move.toLowerCase().trim() === "scissor") {
    if (computerMove === "rock") {
      console.log(`Computer chose ${computerMove}. You have lost.`);
    } else if (computerMove === "paper") {
      console.log(`Computer chose ${computerMove}. You have won.`);
    } else console.log(`Computer chose ${computerMove}. You have tied.`);
  }

  if (move.toLowerCase().trim() === "paper") {
    if (computerMove === "rock") {
      console.log(`Computer chose ${computerMove}. You have won.`);
    } else if (computerMove === "paper") {
      console.log(`Computer chose ${computerMove}. You have tied.`);
    } else console.log(`Computer chose ${computerMove}. You have lost.`);
  }
}

rockPaperScissor("paper");
