const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio"];

var  frutas = [];
var  compras = 100;

frutas.push("apple");//1
frutas.push("mango");//2
frutas.unshift("pera");//0
frutas.pop();
frutas[1]="manzana";

console.table(frutas);  

console.log(frutas.length);//1
console.log(t2());//navideñas
console.log(t3());//100

function t1(){
	var compras = 1;
	return compras;
}

function t2(){
	var compras = "Navideñas";
	return compras;
}

function t3(){
	var posicion = meses.indexOf("Diciembre");
	return posicion;
}