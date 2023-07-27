// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const strReverse = str => {
  let reversedStr = ''
  for (let i = str.length - 1; i >= 0; --i) {
    reversedStr += str[i]
  }
  return reversedStr;
}
console.log(strReverse('hello world'))


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const findTotal = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] > 0) {
      sum += numbers[i]
    }
  }
  return sum;
}
console.log(findTotal([2, -5, 10, -3, 7]))

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
const findMostRepeatedNumber = arr => {
  const occurrences = {};
  // Iterate through the array and count the occurrences of each number
  arr.forEach((num) => {
    if (occurrences[num]) {
      occurrences[num]++;
    } else {
      occurrences[num] = 1;
    }
  });

  // Initialize variables to keep track of the most repeated number and its count
  let mostRepeatedNum;
  let maxOccurrences = 0;

  // Iterate through the occurrences object to find the most repeated number
  for (const num in occurrences) {
    if (occurrences[num] > maxOccurrences) {
      maxOccurrences = occurrences[num];
      mostRepeatedNum = num;
    }
  }

  return parseInt(mostRepeatedNum, 10);
}
const mostRepeated = findMostRepeatedNumber([3, 5, 2, 5, 3, 3, 1, 4, 5]);
console.log("The most repeated number is:", mostRepeated);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      // Check if dividing by zero
      if (num2 === 0) {
        return "Error: Cannot divide by zero.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator.";
  }
}

const num1 = 10;
const num2 = 5;
const operator = '+';
const result = calculate(num1, num2, operator);
console.log("Result:", result);



// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const generateRandomPassword = length => {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+-={}[]|:;"<>,.?/';

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = '';

  // Ensure that the password length is at least 8 characters
  length = Math.max(length, 8);

  // Generate the password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

const randomPassword = generateRandomPassword(12);
console.log("Random Password:", randomPassword);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger = romanNumeral => {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const current = romanNumerals[romanNumeral[i]];
    const next = romanNumerals[romanNumeral[i + 1]];

    if (next && current < next) {
      result += next - current;
      i++; // Skip the next character as it's already considered
    } else {
      result += current;
    }
  }

  return result;
}

const romanNumeral1 = "IX"; // 9
const romanNumeral2 = "XXI"; // 21
console.log(romanToInteger(romanNumeral1)); // Output: 9
console.log(romanToInteger(romanNumeral2)); // Output: 21

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const findSecondSmallest = arr => {
  if (arr.length < 2) {
    return "Error: The array must contain at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "Error: There is no second smallest element.";
  }

  return secondSmallest;
}
const array = [5, 2, 9, 1, 5, 6];
console.log("Second Smallest:", findSecondSmallest(array));

