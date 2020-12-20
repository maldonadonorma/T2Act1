/**/
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio"];
//for (valor inicial ; condicion; cambio}){  accion }
var  frutas = ["manzana","pera","naranja", "melon"]; 



let listaNumeros = [3,34,2,1,7,85,34,2,8,9,12,10];
let numMayor = listaNumeros[0];//34
let numMenor = listaNumeros[0];//1 
let i = 0;

		
for (i = 0; i < listaNumeros.length; i++) {

	if(listaNumeros[i] > numMayor){
		numMayor = listaNumeros[i];
	}
						
	if(listaNumeros[i] < numMenor){
		numMenor = listaNumeros[i];
	}
	//aqui va lo que se repite
	
}

console.log("numero Mayor " + numMayor);
console.log("numero Menor " + numMenor);





/*
for (var i = 0; i < meses.length; i++) {
	//aqui va lo que se repite
	console.log("Estoy en "+meses[i]);
}


 frutas.forEach(elemento=>{
	if(elemento != "naranja"){
		console.log(elemento);
	}
});
*/


// while(condicion){
// 	accion
// 	incremto o cambio
// }
/*
var pos=0;
while(pos < 10){
	console.log(frutas[pos]);
	if(pos == 3){
		pos=10;
	}
	pos++;
}

//console.log(meses[5]);

var pos1=1;
do{
	console.log("frutas: "+pos);
	pos++;
}while(pos<10);
*/

