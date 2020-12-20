/**/
let listaPrecios = [];
let listaProductos = [];
let cantidad = 0;
let total = 0;

function agregar(){
	if(cantidad >= 5){
		alert("No puede agregar mas productos");
		return;
	}

	let pos = listaProductos.length;//
		listaProductos[pos] = document.getElementById("producto1").value;
		let valor = document.getElementById("precio1").value;
		listaPrecios[pos] = parseFloat(valor);
		total = total + parseFloat(valor);
		cantidad++;

		console.table( listaProductos );
		console.table( listaPrecios );
		console.log("Cantidad:"+cantidad);
		console.log("Total:"+total);
	if(cantidad < 3){
		alert("Agregue otro producto");
	}

	
	
	document.getElementById("productos").reset();
}


