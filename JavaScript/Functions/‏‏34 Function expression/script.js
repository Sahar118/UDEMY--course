function logger() {
  console.log("My Name is Sahar");
}

/* Calling / Running the function */
logger();

/*********************************** Function declaration****************************************/

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(4, 2);
console.log(appleOrangeJuice);

/***********************************Function declaration ****************************************/
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAge1(1993);
console.log(age1);

/***********************************Function expression ****************************************/

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);
console.log(age1, age2);
