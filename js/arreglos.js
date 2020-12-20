//ACTIVIDAD 5 ALMACENANDO DATOS 1
var productos = ["manzana", "mango", "pera", "guayaba", "uvas", "piña", "fresa", "naranja", "sandía", "melón"];
console.log(productos.length);

productos.push("ciruela");

productos.unshift("cereza");

productos.pop();

productos.shift();

//productos.sort();

//productos.reverse();

let misfrutas = productos.slice(3,7);

productos.splice(3,5,"cereza");

var verduras = ["calabaza", "papa", "zanahoria"];

var carrito= verduras.concat(productos);

console.table(carrito);

//ACTIVIDAD 5 ALMACENANDO DATOS

productos

