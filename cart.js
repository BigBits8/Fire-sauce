

//function to show amount of items in shopping cart
function badgeItem() {
    let badgeCount= cartItems.length;
    badgeNumber.innerHTML = badgeCount;
}

//Function to add products to shopping cart
function addToCart(index){
    let cart = ``;
    cartItems.push(db[index]);
    
    cartItems.forEach(element => {
        let elementIndex = cartItems.indexOf(element)
        cart += `
        <tr id='cart-item-${elementIndex}'>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td><button onClick='deleteFromCart(${index}, ${elementIndex})' type='button' class='btn-remove' data-id='${index}'>Delete</button></>
        </tr>
        `
    }); 

    cartTableBody.innerHTML = cart;
    badgeItem();
   
}

function deleteFromCart(index, elementIndex){
    cartItems.pop(db[index]); // Ta bort från korgen

    saveCart(); // Spara korgen i localstorage
    badgeItem(); // Uppdatera siffran

    var rowToRemove = document.getElementById(`cart-item-${elementIndex}`); // Hitta raden vi vill ta bort (HTML)
    rowToRemove.remove(); // Ta bort raden
}

//SAVES cartItem TO CART ARRAY 
function saveCart() {
    localStorage.cartItem = JSON.stringify(cartItems);
}












