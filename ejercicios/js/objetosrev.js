/**/


let listaMuebles = [];

for(var i=1; i<=5; i++){
    
    let mueble = {
        id:"00000"+i,
        nombre:"silla",
        altura: Math.random() * 10,
        anchura: .50,
        material:"madera",
        acabado:"barnizado"
    }


    listaMuebles.push(mueble);
}

console.table(listaMuebles);


function Car(nombre, marca, modelo, placas,color){
    this.nombre = nombre;
    this.marca = marca;
    this.modelo = modelo;
    this.placas = placas;
    this.color = color;
}


let miCarro = new Car("Vochito","VW","2000","2586","azul");

console.log(miCarro.nombre);



