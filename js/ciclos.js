/*var productos = ["manzana", "mango", "pera", "guayaba", "uvas", "piña", "fresa", "naranja", "sandía", "melón"];


for (var i =0; i< productos.length; i++) {

    console.log(productos[i]);
}
console.log("----------------------------------------");
productos.forEach(elemento=>{
    
    console.log(elemento)
});
console.log("----------------------------------------");

var pos=0
while (pos < productos.length){
    console.log(productos[pos]);
    pos++;
}
console.log("----------------------------------------");

var pos1=0;
do{
    console.log(productos[pos1]);
    pos1++;

} while(pos1 < productos.length);*/

/*var pos=1;
while (pos <= 10){
    console.log(pos);
    pos++;

}

var pos2=10;
while (pos2 >= 1){
    console.log(pos2);
    pos2--;

}*/

/*var num =3;
for (var i =1; i<= 10; i++) {

    console.log(i+"*"+ num + "=" +i*num);
}*/

/*for (var i =1; i<= 10; i++) {

    for (var j =1; j<= 10; j++) {

        console.log(i+"*"+ j + "=" +i*j);
    }
}*/

/*var precios = 0;
var subtotal= 0;
var cantidad= 5;

while (precios < cantidad){
    subtotal += parseInt(prompt("escribe el precio " + precios));
    precios++;
}
console.log("total=" + (subtotal/cantidad));*/


/*var precios2 = 1;
var subtotal2= 0;
var cantidad2= 10;

while (precios2 <= cantidad2){
    subtotal2 += parseInt(prompt("escribe el precio " + precios2));
    precios2++;
}
console.log("total=" + (subtotal2));*/

//numero maximo y numero minimo
let listaNumeros = [5,33,22,65,95,25,32,10,2,52,48,25];
let numMayor = listaNumeros[0];
let numMenor= listaNumeros[0];
let i = 0;

for (i = 0; i < listaNumeros.length; i++){

    if(listaNumeros[i] > numMayor){
        numMayor=listaNumeros[i];
    }
    
    if(listaNumeros[i] < numMenor){

        numMenor = listaNumeros[i];

    }

}
console.log("numero mayor " + numMayor);
console.log("numero menor " + numMenor);


