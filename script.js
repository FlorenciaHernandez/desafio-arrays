

class Productos {
    constructor (nombre, precio, descuento) {
    this.nombre = nombre
    this.precio = precio
    this.descuento = descuento
    

    }

   
    aplicoDescuento() {
        return this.precio -= (this.precio * 0.1)
    }

}


const producto = []

producto.push(new Productos("Cuarzo Rosa", 650, true))
producto.push(new Productos("Amatista", 680, false))
producto.push(new Productos("Cuarzo Cristal", 630, false))
producto.push(new Productos("Combo sahumo + piedra + palo santo", 1050, true))
producto.push(new Productos("vela Drama", 580, true))
producto.push(new Productos("Vela Rose", 590, false))
producto.push(new Productos("Vela Awesome", 560, false))



function carrito(producto) {
    let ingreso = prompt(producto)
    return ingreso
}


function confirmacion(mensaje) {
    alert(mensaje)
}



let cantidad1, productos, cantidad2, total = 0

cantidad1 = parseInt(carrito(`Cuantos productos desea?`))
    

// calcular el total segun el ingreso de productos
for(let i = 0; i < cantidad1; i++) {

    productos = parseInt(carrito(`Que producto/s desea? Escriba el numero correspondiente:
    1. Cuarzo Rosa
    2. Amatista
    3. Cuarzo Cristal
    4. Combo sahumo + piedra + palo santo 
    5. Vela Drama 
    6. Vela Rose
    7. Vela Awesome`))

    cantidad2 = parseInt(carrito(`Elija la cantidad`))

    switch (productos) {
        case 1:
            console.log(`Este producto tiene 10% de descuento!`);
            total += (producto[0].aplicoDescuento() * cantidad2)
            break;
        case 2:
            total += (producto[1].precio * cantidad2)
            break;
        case 3:
            total += (producto[2].precio * cantidad2)
            break;
        case 4:
            console.log(`Este producto tiene 10% de descuento!`);
            total += (producto[3].aplicoDescuento() * cantidad2)
            break;
        case 5:
            console.log(`Este producto tiene 10% de descuento!`);
            total += (producto[4].aplicoDescuento() * cantidad2)
            break;
        case 6:
            total += (producto[5].precio * cantidad2)
            break;
        case 7:
            total += (producto[6].precio * cantidad2)
            break;               
        default:
            break;
    }

    confirmacion(`Total: $${total}`)
}

confirmacion(`Compra realizada con exito!`)


