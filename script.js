//Minilogin LocalStorage
const recuerdame = document.querySelector(".recuerda");
const olvidame = document.querySelector(".olvidar");
const main = document.querySelector("main");
const getName = document.querySelector("#userInput");
const btnLogear = document.querySelector("#btnLogin");
const btnOlvidar = document.querySelector("#olvidarNombre");

const h1 = document.querySelector("h1");
const saludo = document.querySelector(".saludo-personal");


  btnLogear.addEventListener("click", function () {
    localStorage.setItem("name", getName.value);
  
    nameDisplayCheck();
  });
  
  btnOlvidar.addEventListener("click", function () {
    localStorage.removeItem("name");
  
    nameDisplayCheck();
  });
  
  function nameDisplayCheck() {
    if (localStorage.getItem("name")) {
      let name = localStorage.getItem("name");
      h1.textContent = `Un gusto volvernos a encontrar ${name}!`;
      saludo.textContent = `Bienvenido al sitio, ${name}! Recuerda chequear la consola y el LS para ver los precios de cada producto.`;
  
      olvidame.style.display = "block";
      recuerdame.style.display = "none";
    } else {
      h1.textContent = `Bienvenido a la calculadora de precios! `;
      saludo.textContent = `Recuerda logearte antes de proceder con el uso de la calculadora!`;
  
      olvidame.style.display = "none";
      recuerdame.style.display = "block";
    }
  }
  
  document.body.onload = nameDisplayCheck;

//Array de objetos
class Prendas{
    constructor(tipo, marca, talle, color, precio){
        this.tipo = tipo;
        this.marca = marca;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
}

const prendas = []

prendas.push(new Prendas("Camiseta", "Nike", "XL", "Negro", 2500))
prendas.push(new Prendas("Pantalon", "Adidas", "XXL", "Azul", 3500))
prendas.push(new Prendas("Bufanda", "Generica", "5", "Gris", 500))
prendas.push(new Prendas("Zapatos", "Nike", "42", "Rosa", 9500))
prendas.push(new Prendas("Gorra", "Toto", "10", "Negro", 1560))
prendas.push(new Prendas("Medias Deportivas", "Nike", "XL", "Negro", 1500))
prendas.push(new Prendas("Short", "Generico", "XXL", "Negro", 2550))

console.log(prendas)
localStorage.setItem('prendas', JSON.stringify(prendas));
// Filtrar precios menores a $3000

function filtrarPorPrecio(precio){
    return prendas.filter(propiedad => propiedad.precio <= Number(precio))
}
console.log(filtrarPorPrecio(3000))

//Calcular descuentos para las prendas. (Interactivo)
function descuentos(){
    let descuento, montoVenta, montoTotal;
    montoVenta = Number(document.formulario1.montoVenta.value);
    descuento=0;
    if(montoVenta>=500&&montoVenta<1500)
        descuento=montoVenta*0.05;
    if(montoVenta>=1500&&montoVenta<5000)
        descuento=montoVenta*0.15;
    if(montoVenta>=5000)
        descuento=montoVenta*0.20;
        montoTotal=montoVenta-descuento;
    document.formulario1.descuento.value = descuento;
    document.formulario1.montoTotal.value = montoTotal;
}

