

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
        cart += `
        <tr>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td><button type='button' class='btn-remove' data-id='${index}'>Delete</button></>
        </tr>
        `
    }); 
    cartTableBody.innerHTML = cart;  
    badgeItem();
    // DELETE BUTTON
    const buttonsRemove = document.querySelectorAll(`.btn-remove`);
    console.log(buttonsRemove);

    for (let i = 0; i < buttonsRemove.length; i++) {
    const button = buttonsRemove[i];
    button.addEventListener('click', function(event){
        // console.log('button clicked');
        const buttonClicked = event.target;
        console.log(buttonClicked);
        buttonClicked.parentElement.parentElement.remove();
        cartItems.splice(i, 1);
        console.log(cartItems);
         
    })
   }
   // DELETE BUTTON SLUT
   
}

//SAVES cartItem TO CART ARRAY 
function saveCart() {
    localStorage.cartItem = JSON.stringify(cartItems);
}












