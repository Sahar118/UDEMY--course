/* ------------------------------ JavaScript Fundamentals – Part 1 ------------------------------*/

/*- *** LECTURE: Values and Variables *** -*/

// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// let Country = "Israel";
let Continent = "Asia";
// let Population = 10;

// console.log(Country);
// console.log(Continent);
// console.log(Population);

/*- *** LECTURE: Data Types *** -*/

// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

let Country = "Israel";
let Population = 10;
let isIsland = false;
let language;

// console.log(typeof Country);
// console.log(typeof isIsland);
// console.log(typeof Population);
// console.log(typeof language);

/*- *** LECTURE: let, const and var *** -*/

// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)

// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.

// 3. Try to change one of the changed variables now, and observe what happens

language = "hebrow";

// const => isIsland  / continent/ country
// let =>  / Population

// Population = 12;

// console.log(Population);

/*- **** LECTURE: Basic Operators ****  -*/

// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese

let newPopulation = Population / 2;
console.log(
  "in each half would live" + " " + newPopulation + " " + "Milion people"
);

Population += 1;
console.log(Population);

let finlandPopulation = 6;
console.log(Population > finlandPopulation);

averagePopulation = 33;

console.log(Population < averagePopulation);

let description =
  Country +
  " " +
  "is in" +
  " " +
  Continent +
  "," +
  " " +
  "and its" +
  " " +
  Population +
  " " +
  "million people speak" +
  " " +
  language;
console.log(description);
