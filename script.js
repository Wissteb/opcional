let productos = [];
let precios = [];
function seleccionar(numero) {
    num = document.getElementsByTagName("button")[numero].innerText;
    producto = document.getElementsByTagName("button")[numero].value;
    cantidad=document.getElementById("cant").value;
    precio = Number(cantidad * producto);
    productos.push(producto);
    precios.push(precio); 
    document.getElementById("cant").value = ' ';
}

function prec() {
    total = 0;
    for (x = 0; x < precios.length; x++) {
        total = total + Number(precios[x]);
    }
    return Number(total);
}

function precioIVA() {
    precioIVA = (prec() * 0.21) + prec();
    return Number(precioIVA);
}

function cuenta() {
    if (productos.length > 0) {
        mesa = document.getElementById("mesa").value;
        factura = "Factura: \n"  + "\n" + "Mesa: " + mesa + "\n";

        for (x = 0; x < productos.length; x++) {
            factura = factura + (productos[x] + "\n");
        }

        factura = factura + "Precio sin iva " + prec() + "\n PRECIO FINAL " + prec();

        alert(factura+ " \n Gracias por confiar en Vegaburguer");
    } else {
        alert("No se ha seleccionado ningun producto");
    }
}
