let tbody = document.querySelector("tbody")
fetch("https://672381a8493fac3cf24b2055.mockapi.io/products")
    .then(res => res.json())
    .then(data => data.forEach(elem => {
        tbody.innerHTML += `         
    <tr>
        <th scope="row">${elem.id}</th>
        <td>${elem.name}</td>
        <td>$ ${elem.price}</td>
        <td>${elem.description}</td>
        <td> <img class="itemImg"src="${elem.img}" alt=""></td>
        <td>  <button id="${elem.id}" class="deleteBtn"><i class="fa-solid fa-trash-can"></i></button></td>
        <td><button id="${elem.id}" class="updateBtn"><i class="fa-solid fa-pen"></i></button></td>
    </tr>
    `
        let deleteBtn = document.querySelectorAll(".deleteBtn")
        deleteBtn.forEach((btn) => {
            btn.addEventListener("click", function () {
                btn.parentElement.parentElement.remove()
                fetch(`https://672381a8493fac3cf24b2055.mockapi.io/products/${btn.id}`, {
                    method: 'DELETE',
                }).then(response => response.json())
                console.log(btn.id);
            })
        })

        let updateBtn = document.querySelectorAll(".updateBtn")
        updateBtn.forEach((btn) => {
            btn.addEventListener("click", function () {
                location.href=`./update.html#${btn.id}`
            })
        })
    }))