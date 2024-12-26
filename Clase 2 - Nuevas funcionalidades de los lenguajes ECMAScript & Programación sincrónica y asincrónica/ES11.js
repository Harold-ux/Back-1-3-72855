/*   ES11   */

//  nullish coalescing operator

//  Operador de fusión nula

//  El operador de fusión nula (??) es un operador lógico que devuelve el operando de la derecha cuando el de la izquierda es null o undefined. De lo contrario, devuelve el operando de la izquierda.

// ejemplos:

/* const foo = null ?? "default string";
const cero = 0;
const nula = null;
const noDefinida = undefined;
const resultado = cero ?? "cero es falso";


console.log(cero ?? "cero es falso");
console.log(nula ?? "nula es falso");
console.log(foo);
console.log(resultado); */

// Ejemplo con operador OR ||

/* const fooOR = null || "default string";
const ceroOR = 0 || "cero es falso";
const nulaOR = null || "nula es falso";
const noDefinidaOR = undefined || "noDefinida es falso";

console.log(fooOR);
console.log(ceroOR);
console.log(nulaOR);
console.log(noDefinidaOR); */

//  la diferencia entre estos operadores radica en que el operador OR || evalúa si el valor es falsy
//  (o sea, cuando el valor se evalúe como falso.),
// mientras que el operador de fusión nula ?? evalúa si el valor es null o undefined solamente.
// Y en el caso de la evaluacion del 0 para ambos, el operador OR || lo evalúa como falso,
//  mientras que el operador de fusión nula ?? lo evalúa como verdadero.
// Dejando una opción ya que.a veces es necesario que el valor 0 sea considerado como verdadero.

// ##############################################################################################3

// metodos/propiedades privados en clases

//  En JavaScript, las clases no tienen métodos o propiedades privadas.
//  En ES11, se introdujo una nueva sintaxis para definir métodos y propiedades privadas en clases.
//  Para definir un método o propiedad privada, simplemente agregue un # al principio del nombre del método o propiedad.

// Ejemplo:

/* class Persona {
    // propiedad privada
    #vida = 0;
  
    constructor(nombre, edad, ciudad, vida) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
      if (vida !== undefined) {
        this.#vida = vida;
      }
    }
  
    // método para obtener el valor de la propiedad privada
    obtenerVida() {
      return this.#vida;
    }
  
    // método para establecer el valor de la propiedad privada
    establecerVida(nuevaVida) {
      this.#vida = nuevaVida;
    }
  }
  
  const persona1 = new Persona("Juan", 30, "Madrid");
  console.log(persona1.obtenerVida()); // Debería imprimir 0
  
  const persona2 = new Persona("Pedro", 25, "Barcelona", 100);
  console.log(persona2.obtenerVida()); // Debería imprimir 100 */

// const persona1 = new Persona("Juan", 30, "Madrid", 100);
// console.log(persona1.obtenerVida()); // 100
// persona1.establecerVida(80);
// console.log(persona1.obtenerVida()); // 80
