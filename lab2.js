'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
var hoursSpentInDowington = 0;
function Blob() {
  this.totalConsumed = 0;
  this.hours = 0;
}
var blob = new Blob();
blob.hoursDowington = function() {
  while (this.totalConsumed < 1000) {
    this.hours = this.hours + 1;
    this.totalConsumed = this.totalConsumed + this.hours;
  }
  hoursSpentInDowington = this.hours;
  console.log(hoursSpentInDowington);
};
blob.hoursDowington();
//var hoursSpentInDowington;  TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.
Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  this.population = population;
  this.peoplePerHour = peoplePerHour;
  this.hours = 0;
  this.totalConsumed = 0;
  while (this.totalConsumed < this.population) {
    this.hours = this.hours + 1;
    this.totalConsumed = this.totalConsumed + this.peoplePerHour;
    this.peoplePerHour = this.peoplePerHour + 1;
  }
  return (this.hours);
};
//blob.hoursToOoze(0, 1);
//blob.hoursToOoze(1000, 1);
assert(blob.hoursToOoze(1, 45) === 1, 'value should be in whole hours');
assert(blob.hoursToOoze(1000, 45) === 19, 'the second town takes less time');
assert(blob.hoursToOoze(1, 1) === 1, 'one person 1hr');
assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

//var hello = {
  //klingon: 'nuqneH',  // home planet is Qo'noS
  //romulan: 'Jolan\'tru', // home planet is Romulus
  //'federation standard': 'hello' // home planet is Earth

function SentientBeing(homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
}
SentientBeing.prototype.sayHello = function(sb) {
  var helloReturn = sb.language;
  switch (helloReturn) {
    case 'Klingon':
      return ('nuqneH');
    case 'Romulan':
      return ('Jolan\'tru');
    default:
      return ('Hello');
  }
  var helloLog = this.language;
  switch (helloLog) {
    case 'Klingon':
      console.log('nuqneH');
      break;
    case 'Romulan':
      console.log('Jolan\'tru');
      break;
    default:
      console.log('Hello');
  }
};
function Human() {
  this.homePlanet = 'Earth';
  this.language = 'federation standard';
}
Human.prototype = new SentientBeing();
function Klingon() {
  this.homePlanet = 'Qo\'noS';
  this.language = 'Klingon';
}
Klingon.prototype = new SentientBeing();
function Romulan() {
  this.homePlanet = 'Romulus';
  this.language = 'Romulan';
}
Romulan.prototype = new SentientBeing();
assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the Klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the Romulan should hear Jolan\'tru');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the Klingon should hear nuqneH');
assert((new Romulan()).sayHello(new Human()) === 'Hello',
  'the Human shoud hear Hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the Romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'Hello',
  'the Human shoud hear Hello');
// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.
//function SentientBeing () {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
//}
// sb is a SentientBeing object
//function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    //TODO: put this on the SentientBeing prototype
  //}
// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
//assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  //'the klingon should hear nuqneH');
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************
var cats = ['nacho', 'bob', 'alice', 'greta'];
function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    if ((a.slice(-1)) > (b.slice(-1))) {
      return 1;
    }
    if ((a.slice(-1)) < (b.slice(-1))) {
      return -1;
    }
    return 0;
  }
  stringArray.sort(byLastLetter);
}
lastLetterSort(cats);
console.log(cats);
assert((cats[0].slice(-1) < cats[1].slice(-1)), 'wrong order');
assert((cats[1].slice(-1) < cats[2].slice(-1)), 'wrong order');
assert((cats[2].slice(-1) < cats[3].slice(-1)), 'wrong order');
assert(cats, 'You have no Cats!');
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

var myArray = [
  [3, 4, 5],
  [4, 5, 6],
  [2, 3, 4]
];
function addNumber(numberArray) {
  var sum = 0;
  numberArray.forEach(function(value) {
    sum += value;
  });
  return (sum);
}
function sumSort() {
  function bySum(a, b) {
    if (addNumber(a) > addNumber(b)) {
      return 1;
    }
    if (addNumber(a) < addNumber(b)) {
      return -1;
    }
    return 0;
  }
  myArray.sort(bySum);
  console.log(myArray);
}
sumSort(myArray);
assert((myArray[0][0] + myArray[0][1] + myArray[0][2]) < (myArray[1][0] + myArray[1][1] + myArray[1][2]), 'Wrong Order');
assert((myArray[1][0] + myArray[1][1] + myArray[1][2]) < (myArray[2][0] + myArray[2][1] + myArray[2][2]), 'Wrong Order');
assert(myArray, 'You have no value for myArray');
//function sumArray(numberArray) {
  //var sum = 0;
  // TODO: implement me using forEach
  //return sum;
//}

//function sumSort(arrayOfArrays) {
  //arrayOfArrays.sort(function(item) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  //});
//}

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
