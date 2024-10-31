let productCards = document.querySelector(".product_cards")
fetch("https://672381a8493fac3cf24b2055.mockapi.io/products")
.then(res=>res.json())
.then(data=>data.forEach(elem => {
    productCards.innerHTML+=`         
     <div class="product_cards_card">
    <img src=${elem.img} alt="product_image" />
    <div class="product_cards_card_details">
      <div class="product_cards_card_details_top">
        <h5>${elem.name}</h5>
        <div class="product_cards_card_details_price">
        ${elem.age}
        </div>
      </div>
      <button>View options</button>
    </div>
  </div>

    `
}))