const getName = document.querySelector("#userInput");
const btnLogear = document.querySelector("#btnLogin");
const btnOlvidar = document.querySelector("#olvidarNombre");

let nombre = localStorage.getItem('name')
titulo.innerText = `Bienvenido ${nombre}`

const storedPrendas = JSON.parse(localStorage.getItem('prendas'));
console.log(storedPrendas)