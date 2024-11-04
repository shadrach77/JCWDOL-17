// Exercise 1

function trianglePattern(height) {
  let slots = 0;
  for (let i = height; i > 0; i--) {
    slots += i;
  }
  let arr = [];

  for (let i = 1; i <= slots; i++) {
    arr.push(i);
  }

  let counter = 1;
  const subArray = [];
  let currArray = [];

  for (let i = 0; i < slots; i++) {
    if (currArray.length < counter) {
      currArray.push(arr[i]);
    } else {
      subArray.push(currArray);
      currArray = [arr[i]];
      counter++;
    }
  }
  subArray.push(currArray);

  console.log("Exercise 1");
  subArray.forEach((v) => {
    console.log(v.join(" "));
  });
}

trianglePattern(3);

// Exercise 2

function fizzBuzz(n) {
  console.log("Exercise 2");
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

fizzBuzz(15);

// Exercise 3

function bodyMassIndex(weight, height) {
  const BMI = weight / (height * height);

  console.log("Exercise 3");
  if (BMI < 18.5) {
    console.log("Less Weight");
  } else if (BMI >= 18.5 && BMI < 25) {
    console.log("Ideal");
  } else if (BMI >= 25 && BMI < 30) {
    console.log("Overweight");
  } else if (BMI >= 30 && BMI < 40) {
    console.log("Very Overweight");
  } else if (BMI > 40) console.log("Obesed");
}

bodyMassIndex(69, 1.67);

// Exercise 4

function removeOddNumbers(arr) {
  const newArr = [];

  arr.forEach((v) => {
    if (v % 2 === 0) {
      newArr.push(v);
    }
  });

  console.log("Exercise 4");
  console.log(newArr);
}

removeOddNumbers([1, 2, 3, 4, 5, 6]);

// Exercise 5

function stringToArray(string) {
  console.log("Exercise 5");
  console.log(string.split(" "));
}

stringToArray("Hello World");
