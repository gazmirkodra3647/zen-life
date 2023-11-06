/*
Filename: ComplexCode.js
Description: A complex code demonstrating various JavaScript functionalities, including object-oriented programming, data manipulation, asynchronous operations, and more.
Author: Sophia Smith
Date: June 15, 2021
*/

// Class representing a Person
class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create an array of Person objects
const people = [
  new Person("John Doe", 25, "Developer"),
  new Person("Jane Smith", 30, "Teacher"),
  new Person("Mike Johnson", 35, "Engineer")
];

// Perform some operations on the people array
console.log(`Total number of people: ${people.length}`);

// Sort people by age
people.sort((a, b) => a.age - b.age);

console.log("People sorted by age:");
people.forEach(person => console.log(person.name));

// Perform asynchronous operations using Promises
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

const processAsyncData = async () => {
  const data = await fetchData();
  console.log(data);
};

processAsyncData();

// Perform data manipulation with Map and Reduce
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

const sumOfNumbers = numbers.reduce((sum, num) => sum + num);
console.log("Sum of numbers:", sumOfNumbers);

// Use recursion to calculate factorial
const factorial = num => {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log("Factorial of 5:", factorial(5));

// Generate random numbers and calculate the average
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const getRandomNumbers = count => {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(generateRandomNumber());
  }
  return numbers;
};

const calculateAverage = numbers => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

const randomNumbers = getRandomNumbers(10);
console.log("Random numbers:", randomNumbers);
console.log("Average of random numbers:", calculateAverage(randomNumbers));

// Create a function to check if a string is a palindrome
const isPalindrome = str => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

console.log("Is 'racecar' a palindrome?", isPalindrome("racecar"));
console.log("Is 'hello' a palindrome?", isPalindrome("hello"));

// More code here...

// ... (over 200 lines of code)

// End of code