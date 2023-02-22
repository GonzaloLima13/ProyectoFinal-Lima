const getName = document.querySelector("#userInput");
const btnLogear = document.querySelector("#btnLogin");
const btnOlvidar = document.querySelector("#olvidarNombre");

let nombre = localStorage.getItem('name')
titulo.innerText = `Bienvenido ${nombre}`

if (nombre === null){
    titulo.style.display = "none";
    titulo2.textContent = `¡Logeate en Inicio para que tu nombre salga aqui!`
}

const storedPrendas = JSON.parse(localStorage.getItem('prendas'));
console.log(storedPrendas)
