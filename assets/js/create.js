let productName = document.getElementById("productName")
let productPrice = document.getElementById("productPrice")
let productImg = document.getElementById("productImg")
let productDescription = document.getElementById("productDescription")
let submitBtn = document.querySelector(".submitBtn")

submitBtn.addEventListener("click",function (e) {
    e.preventDefault()
   let obj = {
    name:productName.value.trim(),
    price:productPrice.value.trim(),
    img:productImg.value.trim(),
    description:productDescription.value.trim()
   }
    fetch('https://672381a8493fac3cf24b2055.mockapi.io/products', {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(obj)
    })
    .then(response =>{ response.json()  
    window.location.href = './adminPanel.html'
})
    
})