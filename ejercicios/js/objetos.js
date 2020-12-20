/**/

let misProductos = [];
//definir catalogo
let Catalogo = {
    listaProductos : [],
    imprimir: function(){
        console.table(this.listaProductos);
    },
    tieneRegistros: function(){
        if(this.listaProductos.length > 0){
            return true;
        }
        return false;
    },
    main: function(pa, pb, pc,pd){
        this.listaProductos.push(pa);
        this.listaProductos.push(pb);
        this.listaProductos.push(pc);
        this.listaProductos.push(pd);
        console.log("Total productos: "+this.listaProductos.length);
    },
    limpiar: function(){
        console.clear();
    }
}


function imprimir(){
    console.log("Aqui no es");
}

// definir productos
let Producto1 = {
    nombre : "Jitomate",
    departamento: "Verduras",
    existencia: 200,
    precio:3.0
}


let Producto2 = {
    nombre : "Sandía",
    departamento: "Frutas",
    existencia: 20,
    precio:50.0
}


let Producto3 = {
    nombre : "Cebolla",
    departamento: "Verduras",
    existencia: 100,
    precio:2.0
}

let Producto4 = {
    nombre : "Piña",
    departamento: "Frutas",
    existencia: 8,
    precio:30.0
}

//agregar productos a mi lista
misProductos.push(Producto1);
misProductos.push(Producto2);
misProductos.push(Producto3);
misProductos.push(Producto4);

//imprimir lista de productos
console.table(misProductos);

//agregar productos al catalogo
Catalogo.listaProductos = misProductos;///<--------------------

//
console.log("Productos en catalogo");
Catalogo.imprimir();

//
if(Catalogo.tieneRegistros()== true){
    console.log("Hay productos");
}else{
    console.log("Vacio");
}


let Producto5 = {
    nombre : "Calabaza",
    departamento: "Verduras",
    existencia: 50,
    precio:4.0
}

let Producto6 = {
    nombre : "Papa",
    departamento: "Verduras",
    existencia: 800,
    precio:5.0
}

let Producto7 = {
    nombre : "Espinacas",
    departamento: "Verduras",
    existencia: 0,
    precio:10.0
}

let Producto8 = {
    nombre : "Melon",
    departamento: "Frutas",
    existencia: 15,
    precio:25.0
}

Catalogo.main(Producto5,Producto6,Producto7,Producto8);
Catalogo.imprimir();

function refrescar(){
    location.reload();
}

