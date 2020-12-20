/**/

function suma(valor1, valor2){
    let resultado = valor1 + valor2;
    return resultado;
}


function resta(valor1, valor2, valor3){
    let resultado = valor1 - valor2 -valor3;
    return resultado;
}

function recargar(){
    location.reload();
}



function verificaNumero(numero){
    if(isNaN(numero)){
        console.log("No es un numero");
    }else{
        console.log("Es numero entero")
    }
}

function show_props(){
    let datos = Catalogo.listaProductos;

    datos.map(x=>{
        if(x.existencia > 0){
            console.log(x.nombre);
        }
    });
}


function ordenar(){
    let datos = Catalogo.listaProductos;
    datos.sort(function(a,b){
        if(a.nombre > b.nombre){
            return 1;
        }

        if(a.nombre < b.nombre){
            return -1;
        }
        return 0;
    });
}


function factorial(n){
    //console.trace(n);
    if (n===0){
        return 1;
    } else {
        return n*factorial(n-1);
    }
}
