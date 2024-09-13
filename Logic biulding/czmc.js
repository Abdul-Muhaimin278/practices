//// function userData() {
//// 	let userInput1 = prompt(
//// 		"Please enter first, the numbers should be in the box brackets like so [1, 2, 3, 0, 0, 0]"
//// 	);
//// 	let userInput2 = prompt(
//// 		"Please enter second, the numbers should be in the box brackets like so [2, 5, 6]"
//// 	);

//// 	let arr1 = JSON.parse(userInput1);
//// 	let arr2 = JSON.parse(userInput2);
//// 	if (Array.isArray(arr1) === true && Array.isArray(arr2) === true) {
//// 		mergedArr(arr1, arr2);
//// 	} else if (arr1 === "?" || arr1 === "?") {
//// 		stop();
//// 	} else {
//// 		alert(
//// 			"Please enter the first and  second data in box brackets like so, [1,2,3,4] "
//// 		);
//// 		userData();
//// 	}
//// }

//// function mergedArr(nums1, nums2) {
//// 	let m = nums1.length - nums2.length;
//// 	let n = nums2.length;
//// 	let i = m - 1;
//// 	let j = n - 1;
//// 	let k = m + n - 1;

//// 	while (i >= 0 && j >= 0) {
//// 		if (nums1[i] > nums2[j]) {
//// 			nums1[k--] = nums1[i--];
//// 		} else {
//// 			nums1[k--] = nums2[j--];
//// 		}
//// 	}

//// 	while (j >= 0) {
//// 		nums1[k--] = nums2[j--];
//// 	}

//// 	alert(`the result is ${nums1}`);
//// 	console.log(nums1);
//// }

//// userData();
//// num1.filter((num) => num != 0);
//// mergedArr = num1.concat(num2);
//// mergedArr.sort((a, b) => b - a);
//// alert(`The two ${num1} and ${num2} arrays, merged into ${mergedArr} `);

//// const cars = ["Volvo", "Jeep", "Mercedes"];
//// cars[0] = "Ford";
//// console.log(cars);
let arr = [1, 1, 2, 3, 4, 5];
