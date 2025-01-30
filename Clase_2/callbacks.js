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

// const sumar = (n1, n2) => n1 + n2;
// const restar = (n1, n2) => n1 - n2;
// const multiplicar = (n1, n2) => n1 * n2;
// const dividir = (n1, n2) => n1 / n2;

// console.log(sumar(1, 10));
// console.log(restar(1, 10));
// console.log(multiplicar (5, 10));
// console.log(dividir (50, 5));

// const calcular = (n1, n2, operar) => operar(n1, n2);
// console.log(calcular(1, 10, sumar));
// console.log(calcular (1, 10, restar));
// console.log(calcular (5, 10, multiplicar));
// console.log(calcular(50, 5, dividir));

// calculos con arrays de operaciones
// const operaciones = [
//   { nombre: "Suma", operacion: sumar, n1: 1, n2: 10 },
//   { nombre: "Resta", operacion: restar, n1: 1, n2: 10 },
//   { nombre: "Multiplicación", operacion: multiplicar, n1: 5, n2: 10 },
//   { nombre: "División", operacion: dividir, n1: 10, n2: 0 },
// ];

/* operaciones.forEach((op, index) => {
  if (op.operacion === dividir && op.n2 === 0) {
    console.log("\nError: (NO) se puede dividir ningun numero por 0");
  } else {
    setTimeout(() => {
      console.log(`${op.nombre}: ${calcular(op.n1, op.n2, op.operacion)}`);
    }, index * 1800);
  }
}); */

// ####################################################################################################################################

// Ahora calculo de promedios pero con promesas

// Tenemos un array con  numero a los que queremos sacar el promedio

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Funcion que recibe un array de numeros y retorna una promesa

const obtenerPromedio = (numeros) => {
  return new Promise((resolve) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    console.log("La suma es:", suma);
    const promedio = suma / numeros.length;
    resolve(promedio);
  });
};

// Funcion que recibe un promedio y lo muestra en consola

const mostrarPromedio = (promedio) => {
  console.log("El promedio es:", promedio);
};

async function calcularYMostrarPromedio() {
  try {
    const promedio = await obtenerPromedio(numeros);
    mostrarPromedio(promedio);
  } catch (error) {
    console.log("Ocurrió un error al calcular y mostrar el promedio:", error);
  }
}

calcularYMostrarPromedio(); */

//##############################################################################################

// Ahora otro ejercicio pero para calcular descuento por codigo de promocion

// Funcion que recibe un codigo de promocion y retorna una promesa

/* import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const codigoPromocion = [
  { codigo: "3448" },
  { codigo: "4541" },
  { codigo: "7124" },
  { codigo: "3477" },
];

const DESCUENTO = 0.15;

const promocion = (codigoIngresado) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const codigos = codigoPromocion.map((promo) => promo.codigo);
      if (codigos.includes(codigoIngresado)) {
        resolve(DESCUENTO);
      } else {
        reject("El código de promoción no es válido");
      }
    }, 2000);
  });
};

const solicitarCodigo = () => {
  rl.question(
    "Si posee un código de descuento, ingréselo aquí o escriba 'salir' para terminar: ",
    async (codigoIngresado) => {
      if (codigoIngresado === "salir") {
        rl.close();
        return;
      }
      try {
        const descuentoAplicado = await promocion(codigoIngresado);
        console.log(
          `¡Descuento aplicado! El descuento es del ${
            descuentoAplicado * 100
          }% del monto cobrado.`
        );
        rl.close();
      } catch (error) {
        console.log("Error:", error);
        solicitarCodigo();
      }
    }
  );
};

solicitarCodigo(); */

// ###########################################################################################################

// Ejercicio de callbacks anidados

/* function hervirAgua(callback) {
  console.log("Calentando agua...");
  setTimeout(() => {
    console.log("Agua hervida.");
    callback();
  }, 4000);
}

function molerCafe(callback) {
  console.log("Moliendo café...");
  setTimeout(() => {
    console.log("Café molido");
    callback();
  }, 3500);
}

function prepararCafe(callback) {
  console.log("Preparando el café...");
  setTimeout(() => {
    console.log("¡Café listo para servir!");
    callback();
  }, 2000);
}

function iniciarPreparacion() {
  console.log("Iniciando preparación de café...");
  hervirAgua(() => {
    molerCafe(() => {
      prepararCafe(() => {
        console.log("Proceso terminado. ¡Disfruta tu café!");
      });
    });
  });
}

// Llama a la función principal para iniciar el flujo
iniciarPreparacion(); */

