// Practice: ChickenMonkey
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.


// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//         console.log("ChickenMonkey");
//     } else if (currentNumber % 5 === 0) {
//         console.log("Chicken");
//     } else if (currentNumber % 7 === 0) {
//         console.log("Monkey");
//     } else {
//         console.log(currentNumber);
//     }
// }


// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

//     let output = `${currentNumber}: `

//     if (currentNumber % 5 === 0) {
//         output += "Chicken"
//     }

//     if (currentNumber % 7 === 0) {
//         output += "Monkey"
//     }

//     console.log(output)

// }




// -------------------------- //


// Practice: Take a Number - Battle of the Bands
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 1;

// const takeNumber = function (bandName) {
// 	return `${bandNumber++}. ${bandName}`;
// }

// *** refactored:

const takeNumber = (bandName) => `${bandNumber++}. ${bandName}`


console.log(takeNumber("Galactic Scum"))  // This should print "1. Galactic Scum" in the console
console.log(takeNumber("Underdogs"))  // This should print "2. Underdogs" in the console


// let bandNumber = 1;
// const takeNumber = bandname => `${bandNumber++}. ${bandName}`;


// -------------------------- //


// Practice: Cookout
// Copy the following objects into your JavaScript file.

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// // A first array containing the objects to be cooked.
// // An empty array that will store the objects after the `grill()` function cooks the food.


const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];
const cookedFood = [];


// // This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.
// // The grill() function. Copy this into your JavaScript as well.

function grill (currentObject) {
    currentObject.cooked = true;      	// Modify the food so that it is cooked
    cookedFood.push(currentObject);   	// Put the cooked food into the appropriate array
};

// // Your task is to iterate over the array of uncookedFood and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

for (let i = 0; i < uncookedFood.length; i++) {
	const currentFood = uncookedFood[i];
    grill(currentFood);
	debugger;
}

console.log(cookedFood);


// -------------------------- //



