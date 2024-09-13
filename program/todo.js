document.addEventListener("DOMContentLoaded", () => {
	const foodInput = document.getElementById("food");
	const dayInput = document.getElementById("day");
	const dateInput = document.getElementById("date");
	const searchInput = document.getElementById("search");
	const filterInput = document.getElementById("filter");

	const addBtn = document.getElementById("addBtn");
	const updateBtn = document.getElementById("updateBtn");
	const cancelBtn = document.getElementById("cancelBtn");
	const clearBtn = document.querySelector(".clear_filters");

	const div = document.querySelector(".the_div");
	const listElem = document.getElementById("list");

	let id = null;

	//$ Today's date and setting it to the place holder of date & filter input.

	let today = new Date();
	let dd = String(today.getDate()).padStart(2, "0");
	let mm = String(today.getMonth() + 1).padStart(2, "0");
	let yyyy = today.getFullYear();
	today = yyyy + "-" + mm + "-" + dd;

	dateInput.placeholder = today;
	filterInput.placeholder = today;

	dateInput.addEventListener("focus", () => {
		dateInput.value = today;
	});

	getFromLocalStorage();

	// Adding a click event on add Button and calling addToDo function

	addBtn.addEventListener("click", () => {
		const food = foodInput.value;
		const day = dayInput.value;
		const date = dateInput.value;

		if (food) {
			addToDo(food, day, date);
			clearInputs();
			div.style.display = div.style.display === "none" ? " block" : "block";
		}
	});

	//$ Adding a click event on update button and calling update function

	updateBtn.addEventListener("click", () => {
		const food = foodInput.value;
		const day = dayInput.value;
		const date = dateInput.value;

		if (food && id !== null) {
			update(id, food, day, date);
			toggleBtn();
			clearInputs();
		}
	});

	//$ Adding a click event on cancel button and calling toggle function

	cancelBtn.addEventListener("click", () => {
		const li = listElem.children[id];
		toggleBtn(li);
		clearInputs();
		id = null;
	});

	//$ Adding a key up event on search input field and calling search function

	searchInput.addEventListener("input", () => {
		const search = searchInput.value;
		searchByName(search);
		clearBtn.style.display =
			clearBtn.style.display === "none" ? "inline-block" : "inline-block";
	});

	//$ Adding a key up event on Filter input field and calling filter function

	filterInput.addEventListener("input", () => {
		const filter = filterInput.value;
		filterByDate(filter);
		clearBtn.style.display =
			clearBtn.style.display === "none" ? "inline-block" : "inline-block";
	});

	clearBtn.addEventListener("click", () => {
		searchByName("");
		filterByDate("");

		searchInput.value = "";
		filterInput.value = "";
	});

	//$ AddTo eat  function

	function addToDo(food, day, date) {
		let li = document.createElement("li");
		li.innerHTML = ` <p> <span class="food"> ${food} </span> : <span class="day" >${day}</span> : <span class="date">${date}</span>
		<button class="edit_btn">Edit</button>
		<button class="remove_btn">Remove</button> </p> `;
		listElem.append(li);

		li.querySelector(".remove_btn").addEventListener("click", () => {
			listElem.removeChild(li);
			if (listElem.lastElementChild === null) {
				div.style.display = div.style.display === "block" ? "none" : "none";
			}
			saveToLocalStorage();
		});

		li.querySelector(".edit_btn").addEventListener("click", () => {
			foodInput.value = food;
			dayInput.value = day;
			dateInput.value = date;
			toggleBtn(li);
			id = Array.from(listElem.children).indexOf(li);
			console.log(id);
		});
		saveToLocalStorage();
	}

	//$ Update the list function

	function update(index, food, day, date) {
		const li = listElem.children[index];
		li.innerHTML = ` <p> <span class="food"> ${food} </span> : <span class="day" >${day}</span> : <span class="date">${date}</span>
		<button class="edit_btn">Edit</button>
		<button class="remove_btn">Remove</button> </p> `;

		li.querySelector(".remove_btn").addEventListener("click", () => {
			listElem.removeChild(li);
			if (listElem.lastElementChild === null) {
				div.style.display = div.style.display === "block" ? "none" : "none";
			}
			saveToLocalStorage();
		});

		li.querySelector(".edit_btn").addEventListener("click", () => {
			foodInput.value = food;
			dayInput.value = day;
			dateInput.value = date;

			id = Array.from(listElem.children).indexOf(li);
			toggleBtn(li);
		});
		saveToLocalStorage();
	}

	//$ Input fields Clearing function

	function clearInputs() {
		foodInput.value = "";
		dayInput.value = "Monday";
		dateInput.value = "";
	}

	//$ The button adding removing function

	function toggleBtn() {
		if (addBtn.style.display === "none") {
			addBtn.style.display = "inline-block";
			updateBtn.style.display = "none";
			cancelBtn.style.display = "none";
		} else {
			addBtn.style.display = "none";
			updateBtn.style.display = "inline-block";
			cancelBtn.style.display = "inline-block";
		}
	}

	//$ Search by name function

	function searchByName(s) {
		let li = listElem.getElementsByTagName("li");
		s = s.toUpperCase();

		for (i = 0; i < li.length; i++) {
			span = li[i].getElementsByTagName("span")[0];
			data = span.textContent || span.innerText;
			if (data.toUpperCase().search(s) > -1) {
				li[i].style.display = "block";
			} else {
				li[i].style.display = "none";
			}
		}
	}

	// function searchByName(s) {
	// 	let li = listElem.getElementsByTagName("li");
	// 	s = s.toUpperCase();
	// 	for (let i = 0; i < li.length; i++) {
	// 		span = li[i].getElementsByTagName("span")[0];
	// 		data = span.textContent || span.innerText;
	// 		console.log(data.toUpperCase().indexOf(s));
	// 		if (data.toUpperCase().indexOf(s) > -1) {
	// 			li[i].style.display = "block";
	// 		} else {
	// 			li[i].style.display = "none";
	// 		}
	// 	}
	// }

	//$ Filter by date function

	function filterByDate(f) {
		let li = listElem.getElementsByTagName("li");

		for (let i = 0; i < li.length; i++) {
			p = li[i].getElementsByTagName("p")[0];
			data = p.textContent || p.innerText;
			if (data.indexOf(f) > -1) {
				li[i].style.display = "block";
			} else {
				li[i].style.display = "none";
			}
		}
	}

	function saveToLocalStorage() {
		const items = [];

		document.querySelectorAll("#list li").forEach((li) => {
			const food = li.querySelector(".food").textContent;
			const day = li.querySelector(".day").textContent;
			const date = li.querySelector(".date").textContent;
			items.push({ food, day, date });
		});
		localStorage.setItem("foodItems", JSON.stringify(items));
	}

	function getFromLocalStorage() {
		let items = JSON.parse(localStorage.getItem("foodItems")) || [];
		items.forEach((item) => {
			addToDo(item.food, item.day, item.date);
		});
	}
});
