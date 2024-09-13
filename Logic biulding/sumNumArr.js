function userData() {
	let userInput1 = prompt(
		"Enter first, the numbers should be in the box brackets like so [2, 7, 11, 15]"
	);

	let userInput2 = prompt("Enter target sum like so ,9");

	let arr1 = JSON.parse(userInput1);
	let arr2 = JSON.parse(userInput2);
	if (Array.isArray(arr1) === true) {
		sumOfElem(arr1, arr2);
	} else if (arr1 === "?" || arr2 === "?") {
		stop();
	} else {
		alert(
			"Please enter the first and  second data in box brackets like so, [1,2,3,4] "
		);
		userData();
	}
}

function sumOfElem(arr, tar) {
	let b = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				continue;
			}
			if (arr[i] + arr[j] == tar) {
				b.push(arr[i], arr[j]);
				alert(`The sum of numbers [${b}] is ${tar}`);
				userData();
				return;
			}
		}
	}
}

userData();
