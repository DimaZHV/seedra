import data from "./data.json" assert { type: "json" };
// It's working with Live Server
let person = data.products[4].imageHot;
//let imgLike = data.products[0].imgLike;
console.log(!person);
//console.log(imgLike);

let prodAmount = document.getElementById("prod_amount");
prodAmount.innerHTML = `View all (${data.products.length})`;

let products = document.querySelector(".products");

for (let i = 0; i < data.products.length; i++) {
	let prod = document.createElement("div");
	prod.className = "product";
	products.appendChild(prod);
}

let prodList = document.querySelectorAll(".product");
for (let i = 0; i < data.products.length; i++) {
	let prodAll = `<div class="like"><img src="${data.products[i].imgLike}" alt="" /></div>
							<div class="prod_pic"><img src="${data.products[i].image}" alt="" /></div>
							<div class="stars">
								<div class="stars_pic">
									<img src="./img/star.png" alt="" /><img
										src="./img/star.png"
										alt=""
									/><img src="./img/star.png" alt="" /><img
										src="./img/star.png"
										alt=""
									/><img src="./img/star-half-alt.png" alt="" />
								</div>
								<div class="prod_comments"><p>(123)</p></div>
							</div>
							<div class="prod_description">
								<p>${data.products[i].description}</p>
							</div>
							<div class="prod_price">
								<div class="prod_price_full">
									<img id="imgdel${i}" src="${data.products[i].imageHot}" alt="" />
									<p>${data.products[i].price}</p>
									<p id="low"><s>${data.products[i].priceOld}</s></p>
								</div>
								<div class="prod_box">
									<img src="./img/Vectorbox.png" alt="" />
								</div>
							</div>`;
	prodList[i].innerHTML = prodAll;
	if (!data.products[i].imageHot) {
		document.getElementById(`imgdel${[i]}`).remove();
	}
}
const allButton = document.getElementById("allButton");
const togle = document.querySelectorAll(".category_button");
//let category = document.querySelector(".category");
const togle1 = document.querySelectorAll(".category_button_checked");
allButton.addEventListener("click", defaultAll);

function toggle(e) {
	const targets = e.currentTarget;

	allButton.className = "category_button";
	if (targets.className == "category_button") {
		console.log(targets);
		targets.className = "category_button_checked";
	} else {
		targets.className = "category_button";
	}
}

togle.forEach((e) => e.addEventListener("click", toggle));

function defaultAll(e) {
	const targets = e.currentTarget;
	const togle1 = document.querySelectorAll(".category_button_checked");
	if (togle1.length > 1) {
		togle1.forEach((ev) => (ev.className = "category_button"));
		console.log(togle1.length);
	}
	targets.className = "category_button_checked";
}
