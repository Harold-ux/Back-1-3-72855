/* ES9 */

/* Desestructuracion de objetos */

/* const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  pais: "Argentina",
}; */

/* const paisRevisado = persona.pais;
console.log(paisRevisado);
 */

// Otra forma de hacerlo es con la desestructuración de objetos:

/* const { pais, apellido } = persona;
console.log(pais, apellido); */

// Ahora, si queremos obtener el nombre de la persona y el país, pero queremos que el país se llame nacionalidad,
// podemos hacerlo de la siguiente manera:

/* const { pais: nacionalidad, nombre } = persona;
console.log(nacionalidad, nombre); */

//#####################################################################################

/* desestructuración de arrays */

/* const numeros = [1, 2, 3, 4, 5];
const [primero, , tercero, , last] = numeros;
console.log(primero, tercero, last); */

// se obtiene consola = 1 3 5

//#####################################################################################

/* 
    Otro ejemplo de desestructuración de arrays:

n1 = 1;
n2 = 2;
n3 = 3;
n4 = 4;
n5 = 5;

const numeros = [1, 2, 3, 4, 5];
const [primero, , tercero, , last] = numeros;
console.log(primero, tercero, last, 25); */

//#####################################################################################

/* const pais = "Argentina";
const provincia = "Buenos Aires"; */

// const perfil = { pais, provincia };
// console.log(perfil);

// const perfil2 = { pais, provincia: "Córdoba", persona: "Juan" }; // se puede agregar más propiedades y modificarlas
// console.log(perfil2);

// Ahora quiero cambiar el nombre de la propiedad pais a nacionalidad y agregarle una propiedad más:

/* const perfil3 = {
  nacionalidad: pais,
  provincia: provincia,
  persona: "Juan",
  edad: 25,
};
console.log(perfil3); */

//#####################################################################################

/* spread de objetos */

// ejemplo

const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  pais: "Argentina",
};

/* const detallesAdicionales = {
  profesion: "Ingeniero",
  estadoCivil: "Soltero",
};

const perfilCompleto = {
  ...persona,
  ...detallesAdicionales,
}; */

// console.log(perfilCompleto);

// const { estadoCivil, ...perfilSinEstadoCivil } = perfilCompleto;
// console.log(perfilSinEstadoCivil);


