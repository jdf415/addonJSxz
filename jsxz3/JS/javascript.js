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
newNumArr = [67, 986, 726, 87, 654];

console.log(newNumArr.sort());

console.log(newNumArr.sort(
	// used function as an argument
	// runs function(a, b) on every two numbers in the array
	// and returns the greater of the two
	function(a, b){
		return a - b;
	}))


// decending order

var decendingOrder = function(a, b){
				return b - a;
}

console.log(newNumArr.sort(decendingOrder))
