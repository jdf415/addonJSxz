// newH1 = document.createElement("h1");

// newH1.textContent = "hi =)";

// document.getElementById("hello").appendChild(newH1);




// .length is a static number
// array is an object
var numArray = [1,2,3,4,5,6];

// {
// 	0:1,
// 	1:2,
// 	2:3,
// 	3:4,
// 	4:5,
// 	5:6,
// 	length:6
// } this is what the browser reads from an array

console.log(numArray);

// accesing a specific object in an array using index
console.log(numArray[0]);


// alphabetize an array
var newNameArr = ['Luke', 'John', 'Mark', 'Angela', 'Matthew', 'Gregory'];

console.log(newNameArr);

console.log(newNameArr.sort());

// numericaly order an array
let newNumArr = [67, 986, 726, 87, 654];
console.log(newNumArr);	

// console.log(newNumArr.sort());

// console.log(newNumArr.sort(
// 	// used function as an argument
// 	// runs function(a, b) on every two numbers in the array
// 	// and returns the greater of the two
// 	function(a, b){
// 		return a - b;
// 	}))

// 	// ascending order function
//  var ascendingOrder = function(a, b){
// 		return a - b;
// 	}

// // decending order

// var decendingOrder = function(a, b){
// 				return b - a;
// }

// console.log(newNumArr.sort(decendingOrder))
// console.log(newNumArr.sort(ascendingOrder))



	// variable created that contains a function with an argument
		// function takes randomArr as an argument
			// randomArr is a place holder
var copyArr = function(randomArr) {
	//create an new empty array
	let newRandomArr = [];
		// loops through the argument array - randomArr
	for(var i = 0; i <  randomArr.length; i++){
		// pushes every item through the created new empty array -newRandomArr- to compile a new array
		newRandomArr.push(randomArr[i]);
	}
		// returns the new compiled array from the copyArr with reverse method
	return newRandomArr.reverse();
}

let backwordsArr = copyArr(newNumArr);

console.log(backwordsArr);

let newWordArr = ["hello", "there", "we", "are", "here"];

console.log(copyArr(newWordArr));
