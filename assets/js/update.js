import { updateItem } from "./crud.js";
let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productImg = document.getElementById("productImg");
let productDescription = document.getElementById("productDescription");
let submitBtn = document.querySelector(".submitBtn");

console.log(window.location.hash.slice(1));
let productCards = document.querySelector(".product_cards");
fetch(
  `https://672381a8493fac3cf24b2055.mockapi.io/products/${window.location.hash.slice(
    1
  )}`
)
  .then((res) => res.json())
  .then((data) => {
    productName.value = data.name;
    productPrice.value = data.price;
    productImg.value = data.img;
    productDescription.value = data.description;
  });

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let obj = {
    name: productName.value.trim(),
    price: productPrice.value.trim(),
    img: productImg.value.trim(),
    description: productDescription.value.trim(),
  };
  updateItem("https://672381a8493fac3cf24b2055.mockapi.io/products", obj);
});
