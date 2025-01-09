/* ES10 */

/* Uso de trim */

/* const texto = "  Hola mundo  ";
const texto2 = "Hola mundo       ";

console.log(texto.trim()); 
console.log(texto2.trim()); */


/* flat */

const array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(array.flat(2));

//explicacion: flat() nos permite aplanar un array, es decir, si tenemos un array que contiene otros arrays, flat() nos permite aplanarlos y obtener un solo array con todos los elementos.

