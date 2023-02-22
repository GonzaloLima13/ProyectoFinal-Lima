const getName = document.querySelector("#userInput");
const btnLogear = document.querySelector("#btnLogin");
const btnOlvidar = document.querySelector("#olvidarNombre");

let nombre = localStorage.getItem('name')
titulo.innerText = `Bienvenido ${nombre}`

//En caso de no haber logeado en Inicio, tirar otro mensaje en vez de null
if (nombre === null){
    titulo.style.display = "none";
    titulo2.textContent = `¡Logeate en Inicio para que tu nombre salga aqui!`
}

//Carga el LocalStorage que se guardó en script.js
const storedPrendas = JSON.parse(localStorage.getItem('prendas'));
console.log(storedPrendas)
