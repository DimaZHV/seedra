import data from "./data.json" assert { type: "json" };
// It's working with Live Server

let dataProds = [];
let b = [];

let s = [];
data.products.forEach((el) => dataProds.push(el));

let prodAmount = document.getElementById("prod_amount");

const togle = document.querySelectorAll(".category_button");
const allButton = document.getElementById("allButton");
const bundles = document.getElementById("bundles");
const herbs = document.getElementById("herbs");
const vegetables = document.getElementById("vegetables");
const fruits = document.getElementById("fruits");
const supplies = document.getElementById("supplies");
const flowers = document.getElementById("flowers");

const togle1 = document.querySelectorAll(".category_button_checked");
function toggle(e) {
	const targets = e.currentTarget;

	allButton.className = "category_button";
	if (targets.className == "category_button") {
		targets.className = "category_button_checked";
	} else {
		targets.className = "category_button";
	}
}
function showprodAll(data) {
	s = [];
	data.forEach((el) => s.push(el));
	let products = document.querySelector(".products");

	for (let i = 0; i < s.length; i++) {
		let prod = document.createElement("div");
		prod.className = "product";
		products.appendChild(prod);
	}
	let prodList = document.querySelectorAll(".product");

	for (let i = 0; i < s.length; i++) {
		let prodAll = `<div class="${s[i].category}">
	<div class="like"><img src="${s[i].imgLike}" alt="" /></div>
	<div class="prod_pic"><img src="${s[i].image}" alt="" /></div>
	<div class="stars">
		<div class="stars_pic">
			<img src="./img/star.png" alt="" /><img src="./img/star.png" alt="" /><img
				src="./img/star.png"
				alt=""
			/><img src="./img/star.png" alt="" /><img
				src="./img/star-half-alt.png"
				alt=""
			/>
		</div>
		<div class="prod_comments"><p>(123)</p></div>
	</div>
	<div class="prod_description">
		<p>${s[i].description}</p>
	</div>
	<div class="prod_price">
		<div class="prod_price_full">
			<img id="imgdel${i}" src="${s[i].imageHot}" alt="" />
			<p>${s[i].price}</p>
			<p id="low"><s>${s[i].priceOld}</s></p>
		</div>
		<div class="prod_box">
			<img src="./img/Vectorbox.png" alt="" />
		</div>
	</div>
</div>`;

		prodList[i].innerHTML = prodAll;
		if (!s[i].imageHot) {
			if (document.getElementById(`imgdel${[i]}`) !== null) {
				document.getElementById(`imgdel${[i]}`).remove();
			}
		}
		prodAmount.innerHTML = `View all (${data.length})`;
	}
}
showprodAll(data.products);

function showprod(data) {
	let products = document.querySelector(".products");
	for (let i = 0; i < b.length; i++) {
		let prod = document.createElement("div");
		prod.className = "product";
		products.appendChild(prod);
	}
	let prodList = document.querySelectorAll(".product");

	for (let i = 0; i < b.length; i++) {
		let prodAll = `<div class="${b[i].category}">
	<div class="like"><img src="${b[i].imgLike}" alt="" /></div>
	<div class="prod_pic"><img src="${b[i].image}" alt="" /></div>
	<div class="stars">
		<div class="stars_pic">
			<img src="./img/star.png" alt="" /><img src="./img/star.png" alt="" /><img
				src="./img/star.png"
				alt=""
			/><img src="./img/star.png" alt="" /><img
				src="./img/star-half-alt.png"
				alt=""
			/>
		</div>
		<div class="prod_comments"><p>(123)</p></div>
	</div>
	<div class="prod_description">
		<p>${b[i].description}</p>
	</div>
	<div class="prod_price">
		<div class="prod_price_full">
			<img id="imgdel${i}" src="${b[i].imageHot}" alt="" />
			<p>${b[i].price}</p>
			<p id="low"><s>${b[i].priceOld}</s></p>
		</div>
		<div class="prod_box">
			<img src="./img/Vectorbox.png" alt="" />
		</div>
	</div>
</div>`;

		prodList[i].innerHTML = prodAll;
		prodList[i].classList.add(`${b[i].category}`);
		if (!b[i].imageHot) {
			if (document.getElementById(`imgdel${[i]}`) !== null) {
				document.getElementById(`imgdel${[i]}`).remove();
			}
		}
	}
}
function defaultAll(e) {
	let products = document.querySelector(".products");
	const togle1 = document.querySelectorAll(".category_button_checked");
	const targets = e.currentTarget;
	while (products.firstChild) {
		products.removeChild(products.firstChild);
	}
	if (allButton.classList.contains("category_button_checked")) {
		showprodAll(data.products);
	}
	if (allButton.classList.contains("category_button")) {
		togle1.forEach((ev) => (ev.className = "category_button"));
		while (products.firstChild) {
			products.removeChild(products.firstChild);
		}
		showprodAll(data.products);
		s = b = [];
	}
	targets.className = "category_button_checked";
}

function addProd(category) {
	let products = document.querySelector(".products");
	let productAll = document.querySelectorAll(".product");
	if (
		document
			.getElementById(`${category}`)
			.classList.contains("category_button_checked")
	) {
		while (products.firstChild) {
			products.removeChild(products.firstChild);
		}
		let a = dataProds.filter((item) => item.category == `${category}`);
		a.forEach((e) => b.push(e));
		showprod();
	}
	if (
		document.getElementById(`${category}`).classList.contains("category_button")
	) {
		b.forEach(() => products.firstChild.remove());
		b = b.filter((item) => item.category !== `${category}`);
		productAll.forEach((e) => {
			e.classList.contains(`${category}`) ? e.remove() : false;
		});
		showprod();
	}
	prodAmount.innerHTML = `View all (${b.length})`;
}

togle.forEach((e) => e.addEventListener("click", toggle));

bundles.addEventListener("click", () => addProd("bundles"));
herbs.addEventListener("click", () => addProd("herbs"));
vegetables.addEventListener("click", () => addProd("vegetables"));
fruits.addEventListener("click", () => addProd("fruits"));
supplies.addEventListener("click", () => addProd("supplies"));
flowers.addEventListener("click", () => addProd("flowers"));

allButton.addEventListener("click", defaultAll);

new Swiper(".slider", {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		type: "bullets",
	},
	centeredSlides: true,
	slidesPerView: "auto",
	spaceBetween: 5,
	autoHeight: true,
	breakpoints: {
		1400: {
			slidesPerView: "auto",
		},
		1399: {
			spaceBetweenSlides: 10,
			slidesPerView: "1",
		},
	},
});
