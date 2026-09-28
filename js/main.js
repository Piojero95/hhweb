// --- 2. CAPTURA DE DATOS ---
// Solicitamos 3 datos distintos al usuario usando prompt()
let empresaCliente = prompt("Bienvenido a Muni Work. ¿Cuál es el nombre de su empresa?");
let cantidadCamperas = prompt("¿Cuántas camperas Helly Hansen necesita cotizar?");
let precioUnitario = prompt("¿Cuál es el precio unitario de la prenda (en pesos)?");

// --- 3. PROCESAMIENTO ---
// Convertimos los números solicitados vía prompt (que entran como texto) a tipo number
let cantidadParseada = Number(cantidadCamperas);
let precioParseado = Number(precioUnitario);

// Realizamos una operación matemática básica con los números solicitados (multiplicación)
let costoTotal = cantidadParseada * precioParseado;

// Concatenamos strings con la información solicitada al usuario
let mensajePresupuesto = "Presupuesto para " + empresaCliente + ":\n" + 
                         "Llevando " + cantidadParseada + " camperas HH a $" + precioParseado + " c/u, " +
                         "el total estimado es de $" + costoTotal + ".";

// --- 4. SALIDA DE DATOS ---
// Usamos alert() para mostrar el mensaje final al cliente
alert(mensajePresupuesto);

// Usamos console.log() para dejar un registro interno en la consola del navegador
console.log("Cotización exitosa para la empresa: " + empresaCliente);
console.log("Total a facturar: $" + costoTotal);

