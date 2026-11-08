// --- SIMULADOR BÁSICO MUNI WORK ---

let total = 0;

alert("Bienvenido al cotizador de Muni Work.");

// 1. Pedimos el primer producto ANTES del bucle
let producto = prompt("Ingrese el producto: campera, botas o guantes. (Escriba ESC para salir)");

// 2. BUCLE WHILE: Se repite mientras el usuario NO escriba exactamente ESC
while (producto !== "ESC") {
    
    let precio = 0;

    // 3. CONDICIONALES: Evaluamos qué producto ingresó
    if (producto === "campera") {
        precio = 150000;
    } else if (producto === "botas") {
        precio = 90000;
    } else if (producto === "guantes") {
        precio = 25000;
    } else {
        alert("No tenemos ese producto.");
    }

    // Si el precio es mayor a 0, significa que escribió un producto correcto
    if (precio > 0) {
        // Pedimos la cantidad y la pasamos a número
        let cantidad = Number(prompt("¿Cuántas unidades necesita?"));
        
        // Calculamos el subtotal (usamos const porque este cálculo no cambia en esta vuelta)
        const subtotal = precio * cantidad;
        
        // Sumamos el subtotal al total general
        total = total + subtotal; 
        
        alert("Agregaste " + cantidad + " " + producto + ". Subtotal: $" + subtotal);
        console.log("Se agregaron " + cantidad + " " + producto);
    }

    // 4. CLAVE: Volvemos a pedir un producto al final para que el bucle no sea infinito
    producto = prompt("Ingrese otro producto: campera, botas o guantes. (Escriba ESC para salir)");
}

// 5. RESULTADO FINAL: Una vez que el usuario escribió ESC, el bucle se rompe y lee esto:
alert("Cotización terminada. El total a pagar es: $" + total);
console.log("Cotización finalizada. Total: $" + total);