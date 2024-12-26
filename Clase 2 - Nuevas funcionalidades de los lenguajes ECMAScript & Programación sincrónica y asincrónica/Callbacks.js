/* // Función que toma un callback
function obtenerDatos(callback) {
  console.log("Obteniendo datos...");
  setTimeout(() => {
    const datos = { nombre: "John", edad: 30 };
    callback(datos);
  }, 2000);
}

// Función de callback
function mostrarDatos(datos) {
  console.log("Datos recibidos:", datos);
}

// Llamando a la función con el callback
obtenerDatos(mostrarDatos);
 */
/* El código proporcionado demuestra el uso de callbacks en JavaScript para manejar operaciones asincrónicas. La función `obtenerDatos` está diseñada para simular un proceso de recuperación de datos asincrónico. Toma un solo argumento, `callback`, que se espera que sea una función. Dentro de `obtenerDatos`, se utiliza la función `setTimeout` para imitar un retraso, representando una operación asincrónica como la obtención de datos de un servidor. Después de un retraso de 2000 milisegundos (2 segundos), se ejecuta la función de callback de `setTimeout`, creando un objeto `datos` con las propiedades `nombre` y `edad`. Este objeto se pasa a la función `callback` proporcionada como argumento a `obtenerDatos`.

La función `mostrarDatos` se define como la función de callback que se pasará a `obtenerDatos`. Toma un solo parámetro, `datos`, y lo registra en la consola con el mensaje "Datos recibidos:". Cuando se llama a `obtenerDatos` con `mostrarDatos` como su argumento, después del retraso de 2 segundos, el objeto `datos` se pasa a `mostrarDatos`, que luego registra los datos recibidos en la consola.

Este ejemplo ilustra cómo se pueden usar los callbacks para manejar los resultados de operaciones asincrónicas, asegurando que el código que depende del resultado asincrónico se ejecute solo después de que la operación se complete. Este patrón es fundamental en JavaScript para gestionar tareas asincrónicas como solicitudes de red, lectura de archivos y temporizadores.
 */

// ####################################################################################################################################

// Ejercicio hecho en clase

const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2)=> n1 * n2;
const dividir = (n1, n2) => n1/n2;

// console.log(sumar(1, 10));
// console.log(restar(1, 10));
// console.log(multiplicar (5, 10));
// console.log(dividir (50, 5));

const calcular = (n1, n2, operar) => operar (n1, n2);
console.log(calcular(1, 10, sumar));
console.log(calcular (1, 10, restar));
console.log(calcular (5, 10, multiplicar));
console.log(calcular(50, 5, dividir));
