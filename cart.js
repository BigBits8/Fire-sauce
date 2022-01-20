//Varukorgfunktion
/* addToCart();

function addToCart() {
    let cart = ``;
    for (let i = 0; i < cartItems.length; i++) {
        const shoppingcart= cartItems[i];
        cart += `
        <tr>
            <td>${shoppingcart.name}</td>
            <td>${shoppingcart.price}</td>
            <td>test</td>
        </tr>
        `
    }
    console.log(cartItems)
    cartTableBody.innerHTML = cart;

} */


function badgeItem() {
    let badgeCount= cartItems.length;
    badgeNumber.innerHTML = badgeCount;
}

function addToCart(index){
    let cart = ``;
    cartItems.push(db[index]);
    cartItems.forEach(element => {
        cart += `
        <tr>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td>test</td>
        </tr>
        `
    }); 
    cartTableBody.innerHTML = cart;  
    badgeItem();
} 


function saveCart() {
    localStorage.cartItem = JSON.stringify(cartItems);
} 
