let miCarrito = [];
let cantidad = 0;
let total = 0;

//definir catalogo
let Catalogo = {
    listaProductos: [],
    imprimir: function () {
        console.table(this.listaProductos);
    },
    tieneRegistros: function () {
        if (this.listaProductos.length > 0) {
            return true;
        }
        return false;
    },
    obtenerNumeroRegistros: function () {
        return this.listaProductos.length;
    },
    main: function () {
        console.log("Total productos: " + this.listaProductos.length);
    },
    limpiar: function () {
        console.clear();
    }
}

function llenarCatalogo() {
    // definir productos
    let Producto1 = {
        nombre: "Jitomate",
        descripcion: "Verduras",
        precio: 3.0
    }

    let Producto2 = {
        nombre: "Sandía",
        descripcion: "Frutas",
        precio: 50.0
    }


    let Producto3 = {
        nombre: "Cebolla",
        descripcion: "Verduras",
        precio: 2.0
    }

    let Producto4 = {
        nombre: "Piña",
        descripcion: "Frutas",
        precio: 30.0
    }

    //agregar productos a mi lista
    Catalogo.listaProductos.push(Producto1);
    Catalogo.listaProductos.push(Producto2);
    Catalogo.listaProductos.push(Producto3);
    Catalogo.listaProductos.push(Producto4);

    //imprimir lista de productos
    //Catalogo.imprimir();

}


function agregar() {
    cantidad = Catalogo.obtenerNumeroRegistros();//

    if (cantidad >= 10) {
        alert("No puede agregar más productos");
        return;
    }


    let nombreForm = document.getElementById("nombre").value;
    let descripcionForm = document.getElementById("descripcion").value;
    let precioForm = document.getElementById("precio").value;

    let Producto = {
        nombre: nombreForm,
        descripcion: descripcionForm,
        precio: parseFloat(precioForm)
    }

    Catalogo.listaProductos.push(Producto);

    cantidad++;

    mostrarProductos();

    if (cantidad < 8) {
        alert("Agregue otro producto");
    }

    document.getElementById("formulario").reset();
}
//muestra solo productos
function mostrarProductos() {
    let productosTabla = document.getElementById("productos");
    let datosProductos = Catalogo.listaProductos;
    let rowTabla = '<tr><td class="celda">Nombre</td><td>Descripcion</td><td>Precio</td></tr>';

    datosProductos.forEach(element => {
        rowTabla += "<tr><td>" + element.nombre + "</td>";
        rowTabla += "<td>" + element.descripcion + "</td>";
        rowTabla += "<td>" + element.precio + "</td></tr>";
    });
    productosTabla.innerHTML = rowTabla;
}

//muestra productos para comprar
function mostrarProductosCompra() {
    let productosTabla = document.getElementById("productos");
    let datosProductos = Catalogo.listaProductos;
    let rowTabla = '<tr><td>Nombre</td>';
    rowTabla += '<td>Descripcion</td><td>Precio</td><td> &nbsp;</td>'
    rowTabla += '</tr>';

    datosProductos.forEach(element => {
        rowTabla += "<tr><td>" + element.nombre + "</td>";
        rowTabla += "<td>" + element.descripcion + "</td>";
        rowTabla += "<td>" + element.precio + "</td>";
        rowTabla += '<td><button type="button" onclick="mostrarProducto(\'' + element.nombre + '\')">Agregar</button></td></tr>';
    });
    productosTabla.innerHTML = rowTabla;
}

//mostrar productos de catalogo
function mostrarProducto(nombre) {
    let datosProductos = Catalogo.listaProductos;
    datosProductos.forEach(element => {
        if (element.nombre == nombre) {
            document.getElementById("nombre").value = element.nombre;
            document.getElementById("precio").value = element.precio;
        }
    });
}


function agregarCarrito() {
    let nombreCompra = document.getElementById("nombre").value;
    let precioCompra = document.getElementById("precio").value;
    let cantidadCompra = document.getElementById("cantidad").value;

    let ProductoCompra = {
        nombre: nombreCompra,
        precio: parseFloat(precioCompra),
        cantidad: parseFloat(cantidadCompra)
    }

    miCarrito.push(ProductoCompra);
    console.log(miCarrito);
    mostrarProductosCarrito();
    document.getElementById("compra").reset();
}


//muestra productos para comprar
function mostrarProductosCarrito() {
    let carritoTabla = document.getElementById("carrito");
    let rowTabla = '<tr><td>#</td><td class="celda">Nombre</td>';
    rowTabla += '<td>Precio</td><td>Cantidad</td><td>subtotal</td>';
    rowTabla += '</tr>';
    let totalCompra = 0;
    let subtotalProducto = 0;
    miCarrito.forEach((element, i) => {
        rowTabla += "<tr><td>" + (i + 1) + "</td><td>" + element.nombre + "</td>";
        rowTabla += "<td>" + element.precio + "</td>";
        rowTabla += "<td>" + element.cantidad + "</td>";
        subtotalProducto = element.precio * element.cantidad;
        rowTabla += "<td>" + subtotalProducto + "</td></tr>";
        totalCompra = totalCompra + subtotalProducto;
    });
    rowTabla += '<tr><td colspan="4">Total</td><td>' + totalCompra + "</td></tr>";
    carritoTabla.innerHTML = rowTabla;
}

