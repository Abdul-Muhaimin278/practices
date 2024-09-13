function userData() {
	let userInput1 = prompt(
		"Please enter first, the numbers should be in the box brackets like so [1, 2, 3, 0, 0, 0]"
	);

	let userInput2 = prompt(
		"Please enter second, the numbers should be in the box brackets like so [2, 5, 6]"
	);

	let arr1 = JSON.parse(userInput1);
	let arr2 = JSON.parse(userInput2);
	if (Array.isArray(arr1) === true && Array.isArray(arr2) === true) {
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

function mergedArr(num1, num2) {
	let arr1 = num1;
	arr1 = arr1.filter((n) => n != 0);

	let mergedArr = arr1.concat(num2);
	mergedArr.sort((a, b) => a - b);

	alert(`The two arrays [${num1}] , [${num2}] are merged into [${mergedArr}]`);
}
userData();
