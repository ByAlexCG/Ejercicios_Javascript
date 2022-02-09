"Use strict"
/* Ej 1 */
console.log("Hola Mundo y Pan con Queso")
/* Ej 2 */
var nombreAprendiz = "Jhon Alexander Castaño"
console.log("Bienvenido(a) Señor(a) " + nombreAprendiz)
/* Ej 3 */
let costoProducto = 42000;
let costoImpuesto = 0.10;
let domicilio = 2000;
let subTotal = costoProducto + (costoProducto * costoImpuesto);
let costoTotal = subTotal + domicilio;
console.log("Su costo inicial es de: $"+ costoProducto);
console.log("El costo sub total es de: $"+ subTotal)
console.log("El costo total es de: $" + costoTotal);
/* Ej 4 */
let inicialCosto = 30000;
let segundoCosto = 100000;
let primerDescuento = 0.05;
let segundoDescuento = 0.10;
let descuentoDos = inicialCosto -(inicialCosto * 0.05);

console.log("Su costo inicial es de $"+ inicialCosto)

if (inicialCosto < 30000) {
    console.log("No tiene descuento")
}
else if (inicialCosto >= 30000 && segundoCosto <= 100000) {
    console.log("Tiene un descuento del 5%, Su costo es de $"+ descuentoDos)
} 
else if (segundoCosto >= 100000) {
    console.log("Tiene un descuento del 10% ")
} 
else {
    console.log("No tiene descuento")
}

