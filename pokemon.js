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

//Generador de pokemons aleatorios
let contenedor;
const total_pokemons = 500;

window.onload = inicio;

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function inicio()
{
  contenedor = document.getElementById("vitrina");
  window.addEventListener("click",pintarVitrina);
}

function pintarVitrina(evento){
  contenedor.innerHTML = "";
  traerDatos(aleatorio(1,total_pokemons));
  traerDatos(aleatorio(1,total_pokemons));
  traerDatos(aleatorio(1,total_pokemons));
  traerDatos(aleatorio(1,total_pokemons));
  traerDatos(aleatorio(1,total_pokemons));
}

//Fetch de datos a la api
function traerDatos(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then(function(data){
    let nombre = data.name;
    let url = data.sprites.other.dream_world.front_default;
    if(nombre && url)
    {
        imprimirTarjeta(nombre,url);
    }
  });
}

//Crear la tarjeta del pokemon
function imprimirTarjeta(nombre,url)
{
  let template = `<div style="border-bottom: 2px solid #fdb348; padding:10px"; class="tarjeta">
  <img src="${url}" alt="" >
    <br>
    <label for="">
    ${nombre}
    </label> <br>
    <a href="">Reinicia la página</a>
  </div>`;
  contenedor.innerHTML += template;
}