document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#signUp");

    document.querySelector("#goToSignUp").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("hide-screen");
        createAccountForm.classList.remove("hide-screen");
    });

    document.querySelector("#goToLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("hide-screen");
        createAccountForm.classList.add("hide-screen");
    });
});

var user = document.getElementById('username');
var pw = document.getElementById('password');

function registerAccount() {
    localStorage.setItem('username', user.value);
    localStorage.setItem('password', pw.value);
}

function loginAccount() {
    var localUser = localStorage.getItem('username')
    var localPw = localStorage.getItem('password')

    var usernameLogin = document.getElementById('usernameLogin');
    var passwordLogin = document.getElementById('passwordLogin');

    if(usernameLogin.value == localUser && passwordLogin.value == localPw) {
        window.location.replace("http://www.w3schools.com")
    }
    else {
        alert('Incorrect username or password.');
    }
};

let products = [{
    id: 0,
    name: "Russian Violet Tshirt",
    tag: 'tshirt',
    price: 15,
    image: "./images/tshirt.png",
    inStock: 10,
    inCart: 1,
},
{
    id: 1,
    name: "Sunglow Cap",
    tag: 'cap',
    price: 10,
    image: "./images/cap.png",
    inStock: 53,
    inCart: 1,
},
{
    id: 2,
    name: "Paradise Pink Sweatshirt",
    tag: 'sweatshirt',
    price: 20,
    image: "./images/sweatshirt.png",
    inStock: 2,
    inCart: 1,
},
{
    id: 3,
    name: "Carribean Ocean Hoodie",
    tag: 'hoodie',
    price: 30,
    image: "./images/hoodie.png",
    inStock: 5,
    inCart: 1,
},
{
    id: 4,
    name: "Pistachio Totebag",
    tag: 'totebag',
    price: 5,
    image: "./images/totebag.png",
    inStock: 22,
    inCart: 1,
},
{
    id: 5,
    name: "Red Pigment Beanie",
    tag: 'beanie',
    price: 10,
    image: "./images/beanie.png",
    inStock: 3,
    inCart: 1,
},
];

const productList = document.querySelector(".item-grid")
const cartList = document.querySelector(".cart-items")
const cartTotal = document.querySelector(".cart-total");
const cartItemsTotal = document.querySelector(".header-items-in-cart");

function showProducts(){
    products.forEach( (product) => {
        productList.innerHTML += `
        <div class="product">
        <img src="${product.image}" class="product-photo" alt="${product.name}" />
        <div class="product-description">
        <h1>${product.name}</h1>
        <p>$${product.price}</p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to cart</button>
        </div>
        </div>
        `;
    })
}
showProducts();

let cartProducts = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(id) {
    if(cartProducts.some((item) => item.id === id)) {
        changeInCart("plus", id)
    }
    else {
    const item = products.find((product) => product.id === id)

    cartProducts.push({
        ...item,
        inCart: 1,
    });
}
    updateCart();
}

function updateCart(){
    showCartItems();
    showTotal();

    localStorage.setItem("CART", JSON.stringify(cartProducts));
}

function showTotal() {
    let totalPrice = 0,
        totalItems = 0;

    cartProducts.forEach((item) => {
        totalPrice += item.price * item.inCart;
        totalItems += item.inCart;
    });

    cartTotal.innerHTML = `TOTAL (${totalItems} ITEMS): $${totalPrice}`;
    cartItemsTotal.innerHTML = `(${totalItems})`;
}

function showCartItems() {
    cartList.innerHTML = "";
    cartProducts.forEach((item) => {
        cartList.innerHTML += `
        <div class="cart-row">
            <div class="cart-item" onclick="removeCartItems(${item.id})">
                <img src="${item.image}" class="cart-item-image" alt="${item.name}" />
                <h1>${item.name}</h1>
            </div>
            <div class="cart-quantity">
                <button class="item-quantity" onclick="changeInCart('minus', ${item.id})">-</button>
                ${item.inCart}
                <button class="item-quantity" onclick="changeInCart('plus', ${item.id})">+</button>
            </div>
            <span class="cart-price">
            $${item.price}
            </span>
        </div>
        `
    })
}
function removeCartItems(id) {
    cartProducts = cartProducts.filter((item) => item.id !== id);

    updateCart();
}

function changeInCart(action, id) {
    cartProducts = cartProducts.map((item) => {

        let oldInCart = item.inCart;

        if (item.id === id) {
            if (action === "minus" && oldInCart > 1) {
                oldInCart--;
            } else if (action === "plus" && oldInCart < item.inStock) {
                oldInCart++;
            }
        }

        return {
            ...item,
            inCart: oldInCart,
        };
    });

    updateCart();
}


