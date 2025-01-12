import fs, { existsSync, renameSync, writeFileSync } from "fs";

const path = "./data/products.manager.js";
const existFile1 = fs.existsSync(path);
const existFile2 = fs.existsSync("./data/cart_manager.js");
const existFile3 = "./data/cart_manager.js"; // para poder modificar el nombre del archivo (cart_manager.js) a (carts.manager.js) se guarda en esta constante
const existFile2Rename = "./data/carts.manager.js"; // la constante con el nombre definitivo

console.log(existFile1); // ---> dara un true
console.log(existFile2); // ---> dara como resultado false


console.log(existFile2Rename); // --> el log del resultado con la variable actualizada

// existsSync --> siempre devuelve un booleano

// renombrar el archivo

/* if (fs.existsSync(existFile3)) {
  try {
    fs.renameSync(existFile3, existFile2Rename); // Renombra el archivo "cart_manager.js" a "carts.manager.js".
    console.log(`El archivo ha sido renombrado a: ${existFile2Rename}`); // Confirma el cambio de nombre.
  } catch (error) {
    console.log("Error al renombrar el archivo: ", error); 
    // Captura y muestra cualquier error ocurrido al renombrar.
  }
} else {
  console.log("El archivo original no existe."); 
// Muestra este mensaje si el archivo "cart_manager.js" no se encuentra.
}
 */
//////////////////////////////////////////////////////////////////

// ahora un ejercicio con read, mostrando que en carts.manager ya no 
// abra un array vacio sino un product con un string de 3 productos en formato JSON

if (!existFile2){
const data = JSON.stringify([{ prod: 1 }, { prod: 2 }, { prod: 3 }]); // definimos una constante con un arreglo con una cadena en formato JSON 
fs.writeFileSync(existFile2Rename, data); // Crea el archivo "cart.manager.js" con un arreglo vacío
}

let product = fs.readFileSync("./data/carts.manager.js", "utf-8");
product = JSON.parse(product)
console.log(product);

/////////////////////////////////////////////////////////////////////////////////////////////

// ahora a borrar el archivo creado con el nombre incorrecto.. que fué cart en vez de carts.manager
// usaremos la propiedad de fileSystem llamada unlink en forma sincrona unlinkSync

fs.unlinkSync("./data/cart.manager.js") /// --> se borró al ejecutar la linea