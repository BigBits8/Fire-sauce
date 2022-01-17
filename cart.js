addToCart();

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
}

function saveCart() {
    localStorage.cartItem = JSON.stringify(cartItems);
}

