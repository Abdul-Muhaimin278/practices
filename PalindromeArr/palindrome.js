function userData() {
	let userInput = prompt(
		"Please enter the numbers you want to check like so, [1,2,1] "
	);
	let arr = JSON.parse(userInput);
	if (Array.isArray(arr) === true) {
		console.log(arr);
		isPalindrome(arr);
	} else if (arr === "?") {
		stop();
	} else {
		alert("Please enter numbers inside box brackets [], like so [1,2,1]");
		userData();
	}
}

function isPalindrome(arr) {
	let reverse = [];

	// reverse = arr.reverse();

	for (let i = arr.length - 1; i >= 0; i--) {
		reverse.push(arr[i]);
	}

	// // reverse = arr.toReversed();

	// arr.forEach((num) => {
	// 	reverse.unshift(num);
	// });

	// reverse = arr.map((item, index) => arr[arr.length - 1 - index]);
	// console.log(arr);

	// if (arr === reverse) {
	// 	alert(`${arr} is a Palindrome`);
	// 	userData();
	// } else {
	// 	alert(`${arr} is not a Palindrome`);
	// 	userData();
	// }

	if (arr.toString() === reverse.toString()) {
		alert(`${arr} is a Palindrome`);
		userData();
	} else {
		alert(`${arr} is not a Palindrome`);
		userData();
	}
}
userData();
