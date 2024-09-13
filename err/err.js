// console.log(false);
// console.log(!"lyda");
// for (var i = 0; i < 3; i++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 1);
// }
// for (let i = 0; i < 3; i++) {
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 1);
// }
// function math() {
// 	radius = 10;
// 	diameter= {
//     this.radius =
//   };
// 	let periMeter = 2 ∗ Math.PI ∗ this.radius;
// }
// console.log(name);
// console.log(age);
// var name = "abdul";
// let age = 21;
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5];
// console.log(typeof arr2);
// let on = { zz: 20 };
// let of = { zz: 20 };
// console.log(typeof on);
// let c = { greeting: "hey" };
// let d;
// d = JSON.parse(JSON.stringify(c));
// c.greeting = "hello";
// console.log(d.greeting);
// console.log(c.greeting);
// const obj1 = { first: 20, second: 30, first: 50 };
// console.log(obj1);
// let a = [1, 2, 3, 4, 5];
// var target = 5;
// console.log(a[2] == target);
// let example = (a, b, c) => {
// 	this.a = a;
// 	this.b = b;
// 	this.c = c;
// };
// const num = new example(10, 20, 30);

// console.log(num.a, num.b, num.c);

// var a = Math.max();
// var b = Math.min();
// console.log(a, b);
// console.log(b);

// let a = true + true + true * 3;
// console.log(a);

// const set = new Set();
// set.add(5);
// set.add("Hello");
// set.add({ name: "Scaler" });
// for (let item of set) {
// 	console.log(item + 6);
// }

// (function () {
// 	setTimeout(() => console.log(1), 2000);
// 	setTimeout(() => console.log(2), 121);
// 	setTimeout(() => console.log(3), 1200);
// 	console.log(4);
// })();

// console.log(typeof undefined);

// let employee = {
// 	eid: "E102",
// 	ename: "Jack",
// 	eaddress: "New York",
// 	salary: 50000,
// };
// console.log("Employee=> ", employee);
// let newEmployee = employee; // Shallow copy
// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

// console.log(typeof NaN);

// (function (a) {
// 	return (function () {
// 		console.log(a);
// 		a = 6;
// 	})();
// })(21);

// console.log(parseInt("123hello"));
// console.log(parseInt("hello123"));

// const person = { name: "Lydia" };

// function sayHi(age) {
// 	return `${this.name} ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi);

// 0;
// new Number(0);
// ("");
// (" ");
// new Boolean(false);
// undefined;
// console.log(!!null);
// console.log(!"");
// console.log(!1);
// let x = (y = 5);
// console.log(typeof x);

// (() => {
// 	let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

//  name = "Lydia";
//  age = 21;

// console.log(delete name);
// console.log(delete age);

// const user = { name: "shani", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = (number) => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);

// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));

// console.log(Number(2) === Number(2));

// class Chameleon {
// 	static colorChange(newColor) {
// 		this.newColor = newColor;
// 		return this.newColor;
// 	}

// 	constructor({ newColor = "green" } = {}) {
// 		this.newColor = newColor;
// 	}
// }

// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));

// class Chameleon {
// 	static colorChange(newColor) {
// 		this.newColor = newColor;
// 		console.log("Static fn called");
// 		return this.newColor;
// 	}
// 	constructor({ newColor = "green" } = {}) {
// 		this.newColor = newColor;
// 		colorChange("red");
// 	}
// }
// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));

// function sayHi(name) {
// 	return `Hi there, ${name}`;
// }

// console.log(sayHi());

// var status = "😎";

// setTimeout(() => {
// 	const status = "😍";

// 	const data = {
// 		status: "🥑",
// 		getStatus() {
// 			return this.status;
// 		},
// 	};

// 	console.log(data.getStatus());
// 	console.log(data.getStatus.call(this));
// }, 0);

// const person = {
// 	name: "Lydia",
// 	age: 21,
// };

// let city = person.city;
// city = "Amsterdam";

// console.log(person);

function removeDuplicates(nums) {
	if (nums.length === 0) {
		return 0;
	}

	// Initialize the uniqueIndex pointer
	let i = 0;

	// Traverse the array starting from the second element
	for (let j = 1; j < nums.length; j++) {
		// Check if the current element is different from the last unique element
		if (nums[j] !== nums[i]) {
			// Move i forward
			i++;
			// Update the position with the new unique element
			nums[i] = nums[j];
		}
	}

	// The length of the array with unique elements
	return i + 1;
}

// Example usage
const arr = [1, 1, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicates(arr);
// console.log(newLength); // Output: 5
console.log(arr.slice(0, newLength)); // Output: [1, 2, 3, 4, 5]
