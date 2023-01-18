let preciosFijos = [500,1500,4500,6500]
function Accesorio(tipo, peso, color,precio){ 
	this.Tipo = tipo;
	this.Peso = peso;
	this.Color = color;
    this.Precio = precio;
}
let remera = new Accesorio("Remera", "200g","Negro","$"+preciosFijos[0]);
let pantalon = new Accesorio("Pantalon", "650g","Rojo","$"+preciosFijos[1]);
let short = new Accesorio("Short Nike ", "150g","Rosa","$"+preciosFijos[2]);
let smartwatch = new Accesorio("Smartwatch Samsung", "100g","Azul","$"+preciosFijos[3]);
console.log(remera,pantalon,short,smartwatch)

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
