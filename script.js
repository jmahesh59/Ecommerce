
let count = document.getElementById("count");
let cartItem = 0;
let cart_count = document.getElementById("cart-count");
let spanE1 = document.createElement("span");


count.addEventListener("click", () => {
    cartItem =cartItem+ 1;
    spanE1.textContent = cartItem; // Assign the value using =
    cart_count.appendChild(spanE1);
});
