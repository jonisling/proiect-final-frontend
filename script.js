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
        location.replace('https://www.javascripttutorial.net/');
    }
    else {
        alert('Incorrect username or password.');
    }
}

let products = [
    { "name": "Russian Violet Tshirt", "id": 1, count: 1},
    { "name": "Sunglow Cap", "id": 2, count: 1},
    { "name": "Paradise Pink Sweatshirt", "id": 3, count: 1},
    { "name": "Carribean Ocean Hoodie", "id": 4, count: 1},
    { "name": "Pistachio Totebag", "id": 5, count: 1},
    { "name": "Red Pigment Beanie", "id": 6, count: 1},
]
