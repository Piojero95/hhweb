let total = 0;

alert("Bienvenido al cotizador de Muni Work.");

let producto = prompt("Ingrese el producto: campera, botas o guantes. (Escriba ESC para salir)");

while (producto !== "ESC") {
    
    let precio = 0;

    if (producto === "campera") {
        precio = 150000;
    } else if (producto === "botas") {
        precio = 90000;
    } else if (producto === "guantes") {
        precio = 25000;
    } else {
        alert("No tenemos ese producto.");
    }

    if (precio > 0) {

        let cantidad = Number(prompt("¿Cuántas unidades necesita?"));
        
        const subtotal = precio * cantidad;
        
        total = total + subtotal; 
        
        alert("Agregaste " + cantidad + " " + producto + ". Subtotal: $" + subtotal);
        console.log("Se agregaron " + cantidad + " " + producto);
    }

    producto = prompt("Ingrese otro producto: campera, botas o guantes. (Escriba ESC para salir)");
}

alert("Cotización terminada. El total a pagar es: $" + total);
console.log("Cotización finalizada. Total: $" + total);