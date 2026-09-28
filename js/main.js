// --- 2. CAPTURA DE DATOS ---
// 3 datos distintos usando prompt()
let empresaCliente = prompt("Bienvenido a Muni Work. ¿Cuál es el nombre de su empresa?");
let cantidadCamperas = prompt("¿Cuántas camperas Helly Hansen necesita cotizar?");
let precioUnitario = prompt("¿Cuál es el precio unitario de la prenda (en pesos)?");

// --- 3. PROCESAMIENTO ---
// Convertirs números solicitados vía prompt (que entran como texto) a tipo number
let cantidadProcesada = Number(cantidadCamperas);
let precioProcesado = Number(precioUnitario);

// Operación matemática básica con los números solicitados
let costoTotal = cantidadProcesada * precioProcesado;

// Concat strings con la infor solicitada al usuario
let mensajePresupuesto = "Presupuesto para " + empresaCliente + ":\n" + 
                         "Llevando " + cantidadProcesada + " camperas HH a $" + precioProcesado + " c/u, " +
                         "el total estimado es de $" + costoTotal + ".";

// --- 4. SALIDA DE DATOS ---
// Alert() para mostrar el mensaje final al cliente
alert(mensajePresupuesto);

// Dejar un registro interno en la consola del navegador
console.log("Cotización exitosa para la empresa: " + empresaCliente);
console.log("Total a facturar: $" + costoTotal);

