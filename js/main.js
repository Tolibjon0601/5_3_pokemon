function getElement(selector, parent = document) {
	return parent.querySelector(selector);
}

const pokemonCards = [
	{
		id: 1,
		title: "Pokemons",
		img: "./img/item_img_1.png",
		categories: ["Grass", "Poison"],
		weight: "8.9kg",
		age: 99,
	},
	{
		id: 2,
		title: "Pokemons2",
		img: "./img/item_img_1.png",
		categories: ["Grass", "Poison"],
		weight: "8.9kg",
		age: 99,
	},
	{
		id: 3,
		title: "Pokemons3",
		img: "./img/item_img_1.png",
		categories: ["Grass", "Poison"],
		weight: "8.9kg",
		age: 99,
	},
	{
		id: 4,
		title: "Pokemons4",
		img: "./img/item_img_1.png",
		categories: ["Grass", "Poison"],
		weight: "8.9kg",
		age: 99,
	},
	{
		id: 5,
		title: "Pokemons5",
		img: "./img/item_img_1.png",
		categories: ["Grass", "Poison"],
		weight: "8.9kg",
		age: 99,
	},
	{
		id: 6,
		title: "Pokemons6",
		img: "./img/item_img_1.png",
		categories: ["Grass", "Poison"],
		weight: "8.9kg",
		age: 99,
	},
	{
		id: 7,
		title: "Pokemons7",
		img: "./img/item_img_1.png",
		categories: ["Grass", " Poison"],
		weight: "8.9kg",
		age: 99,
	},
	{
		id: 8,
		title: "Pokemons8",
		img: "./img/item_img_1.png",
		categories: ["Grass", " Poison"],
		weight: "8.9kg",
		age: 99,
	},
];

const categories = ["Gross", "Pokemon", "Poison"];
const sectionEl = document.querySelector(".row");

const btns = document.querySelectorAll(".btn");
const template = document.querySelector("template");

const elCategories = getElement("#categories-list");
const elSearchInput = getElement("#search");
const elSubmitBtn = getElement("#submit-btn");

elSubmitBtn.addEventListener("click", () => {
	if (elSearchInput.value.length > 0) {
		const filteredArray = pokemonCards.filter((item) =>
			item.title.toLowerCase().includes(elSearchInput.value.toLowerCase())
		);
		displayPokemonCard(filteredArray);
	} else {
		displayPokemonCard(pokemonCards);
	}
});

window.addEventListener("DOMContentLoaded", function () {
	displayPokemonCard(pokemonCards);

	categories.forEach((category) => {
		const newOption = document.createElement("option");
		newOption.value = category;
		newOption.textContent = category;

		elCategories.appendChild(newOption);
	});
});

elCategories.addEventListener("change", () => {
	const filteredArray = pokemonCards.filter((item) => item.categories.includes(elCategories.value));
	displayPokemonCard(filteredArray);
});

function displayPokemonCard(menuItems) {
	sectionEl.textContent = null;

	let displayPokemonCard = menuItems.map((item) => {
		const newElement = template.content.cloneNode(true);

		const topImg = getElement(".card-img-top", newElement);
		const title = getElement(".card-title", newElement);
		const weight = getElement(".card-weight", newElement);
		const age = getElement(".card-age", newElement);
		const categories = getElement(".categories", newElement);

		topImg.src = item.img;
		title.textContent = item.title;
		weight.textContent = item.weight;
		age.textContent = item.age;

		item.categories.map((category, i) => {
			const newLi = document.createElement("li");
			const span = document.createElement("span");

			if (item.categories.length - 1 !== i) {
				span.textContent = ", ";
			}

			newLi.textContent = category;

			categories.appendChild(newLi);
			categories.appendChild(span);
		});

		sectionEl.appendChild(newElement);
	});
}
