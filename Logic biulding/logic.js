function userData() {
	let userInput = prompt(
		"Please enter the numbers you want to check like so, [1,2,3,4,5] "
	);
	let arr = JSON.parse(userInput);
	if (Array.isArray(arr)) {
		filterDuplicates(arr);
	} else if (arr === "?") {
		stop();
	} else {
		alert("Please enter numbers inside box brackets [], like so [1,2,3,4,5]");
		userData();
	}
}

function zeroToEnd(arr) {
	let m = arr.length;
	let filter = arr.filter((num) => num !== 0);
	let f = filter.length;
	for (let i = 1; i <= m - f; i++) {
		filter.push(0);
	}

	alert(`The array is converted to [${filter}] `);
}

function biggestInt2nd(arr) {
	arr.sort((a, b) => {
		return a - b;
	});
	alert(`The 2nd highest value in ${arr} is ${arr[arr.length - 2]}`);
}

function isAscending(arr) {
	let ascend = [];

	for (let i = 0; i <= arr.length - 1; i++) {
		ascend.push(arr[i]);
	}

	ascend.sort((a, b) => {
		return a - b;
	});

	if (arr.toString() === ascend.toString()) {
		alert(`${arr} is in ascending order`);
		userData();
	} else {
		alert(`${arr} is not in ascending order`);
		userData();
	}
}

function biggestInt(arr) {
	arr.sort((a, b) => {
		return a - b;
	});
	alert(`the highest value in ${arr} is ${arr[arr.length - 1]}`);

	const maxVal = Math.max(...arr);
	alert(`The highest value in [${arr}] is (${maxVal})`);
}

function filterDuplicates(arr) {
	// let arr1 = arr.filter((num, ind) => arr.indexOf(num) === ind);
	let finalArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (finalArr.indexOf(arr[i]) === -1) {
			finalArr.push(arr[i]);
			console.log(finalArr, arr[i]);
		}
	}

	alert(`The filtered array is ${finalArr}`);
	userData();
}

// function filterDuplicates(arr) {
// 	let i = 0;
// 	for (let j = 0; j < arr.length; j++) {
// 		if (arr[j] !== arr[i]) {
// 			i++;
// 			arr[i] = arr[j];
// 		}
// 	}
// 	alert(`The filtered array is ${arr.splice(i + 1)}`);
// 	userData();
// }

userData();
