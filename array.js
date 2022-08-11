const friends = ["Ali", "Hussnain", "Zilan", "Muiz"];
for (const el of friends) {
  console.log(el);
}

for (let element in friends) {
  console.log(element);
}

let fruits = ["Apples", "Pear", "Orange"];

//push a new value into the fruits array

fruits.push("Banana");
console.log(fruits);
console.log(fruits.length);

let styles = ["jazz", "blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles);

//Array methods

// 1. splice
let arr = ["I", "study", "JavaScript", "right", "now"];
console.log(arr);

let arr1 = ["I", "study", "JavaScript", "right", "now"];
arr1.splice(0, 2);
console.log(arr1);
//remove 3 elements and replace them with another word
arr.splice(0, 4, "Let's", "Enjoy!");

//Negative indexing
let odd = [1, 3, 5, 9, 11, 13, 15];
odd.splice(-1, 0, 3, 4);
console.log(odd);

//2. splice

let animals = ["dog", "cat", "wolf"];
console.log(animals.slice(1, 3));
console.log(animals.slice(-1));

//find and findlastindex

let users = [
  { id: 1, name: "karim" },
  { id: 2, name: "sarir" },
  { id: 3, name: "adnan" },
];

let user = users.find((item) => item.id == 1);
console.log(user.name);
let admins = [
  { id: 1, name: "karim" },
  { id: 2, name: "sarir" },
  { id: 3, name: "didar" },
  { id: 4, name: "akram" },
  { id: 5, name: "asif" },
];
//filter
let someUsers = users.filter((item) => item.id < 5);
console.log(someUsers.length);

//map
let months = [
  "january",
  "febuary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "August",
  "September",
].map((el) => el.length);

console.log(months);
console.log(months.sort());

//use localeCompare for strings
const names = ["aftab", "akram", "javid", "saleem", "qasim"];
console.log(names.sort((a, b) => (a > b ? 1 : -1)));
console.log(names.sort((a, b) => a.localeCompare(b)));

//Reverse
let oddNum = [1, 3, 5, 7, 9, 11, 13, 15];
oddNum.reverse();
console.log(oddNum);

//Split and join ----->splits string into an array
let cities = "china, pakistan,  india, japan, srilanka";

let splt = cities.split(",");

for (let city of splt) {
  console.log(`Most Famous city ${city}`);
}

let arg = cities.split(",", 2);
console.log(arg);

//split into letters -----> split(s) with an empty string split string into an arry of letters

let job = "Node js Developer";
console.log(job.split(""));

//arr.join(glue)-----< adds two arr
let a = ["habib", "salman", "tahir"];
let b = a.join("^^");
console.log(b);

/**REDUCE/REDUCERIGHT
The method arr.reduce and arr.reduceright are used to calculate a single value based on the array*/

// let value = arr.reduce(
//   (accumulator, item, index, array) => {
//     //..........
//   },
//   [initial]
// );

let digit = [23, 87, 92, 83];

let result = digit.reduce((sum, current) => sum + current, 0);

console.log(result);

/**Array.isArray
Arrays do not form a separate language type. They are based on obhects. typeof helps to distingush a plain object from an array
*/

console.log(typeof { name: "karim" });
console.log(typeof ["karim"]);

console.log(Array.isArray({ id: 2 }));
console.log(Array.isArray([3, 2]));

// thisArg
let army = {
  minAge: 18,
  maxAge: 24,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let usrs = [{ age: 13 }, { age: 16 }, { age: 20 }, { age: 24 }];

let soilders = usrs.filter(army.canJoin, army);
console.log(soilders.length);
console.log(soilders[0].age);
// console.log(soilders[1].age);

//Task
const camelize = (str) => {
  const st = "background-colorlist-style-image-webkit-transition";
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};
