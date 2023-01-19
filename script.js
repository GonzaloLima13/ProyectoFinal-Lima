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

//Prenda a agregar en la lista del array
let newPrenda = 1
while (newPrenda < 2){
    let pregunta = new Prendas((prompt("Ingresa tipo de prenda")), 
            (prompt("Ingresa su marca")),
            (prompt("Ingresa el Talle")), 
            (prompt("Ingresa el Color")), 
            Number(prompt("Ponle su Precio")))
            prendas.push(pregunta)
    newPrenda++
}

console.log(prendas)

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

