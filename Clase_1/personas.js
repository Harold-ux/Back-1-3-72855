/*let people = [
  { id: 1, first_name: "Luz", last_name: "Escalante", age: 25, gender: "F" },
  { id: 2, first_name: "Bruno", last_name: "Guerra", age: 18, gender: "M" },
  { id: 3, first_name: "Marisol", last_name: "Cadena", age: 23, gender: "F" },
  { id: 4, first_name: "Franco", last_name: "Chachagua", age: 30, gender: "M" },
];

let person = people.find((p) => {
  let test;
  test = p.id === 3;
  return test;
});

console.log(person); */

// ####################################################################################

// Variables globales y locales

/* import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Varible global
let num3 = 0;

function Sumar() {
  let num1 = 12;
  rl.question("Ingresa un número entero para darle un valor a num2: ", (input) => {
    // Variable local
    let num2 = parseInt(input);
    if (isNaN(num2)) {
      console.log("Por favor, ingresa un número válido.");
      rl.close();
      return;
    }
    // Asignación de un nuevo valor a la variable global num3
    num3 = 5;
    let suma = num1 + num2 + num3;
    console.log("El valor de num1 es " + num1);
    console.log("El resultado de la suma es " + suma);
    console.log("El valor de num3 actual es " + num3);
    rl.close();
  });
}
console.log("El valor de num3 inicial es " + num3);
Sumar();
 */

// ######################################################################################

/* const nombre = "Peter Parker";
const ciudad = "New York";
let edad = 18;
const vida = 100;

class Persona {
  constructor(nombre, edad, ciudad, vida) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida;
  }
}

const spiderman = new Persona(nombre, edad, ciudad, vida);

console.log(
  `${spiderman.nombre} vive en ${spiderman.ciudad}, tiene ${spiderman.edad} años con ${spiderman.vida} % de vida`
);
 */
// #############################################################

// Otro ejemplo:

/* class Persona {
  static especiePorDefecto = "Humana";

  constructor(nombre, zona, especie = Persona.especiePorDefecto) {
    this.nombre = nombre;
    this.zona = zona;
    this.especie = especie;
  }
}

const p1 = new Persona("Juan", "Pto. Ordaz");
const p2 = new Persona("Maria", "Babilonia", "Sativa");

console.log("Persona registrada : " + p1.nombre);
console.log("De: " + p1.zona);
console.log(`Especie : ${p1.especie}`);
console.log("Persona registrada : " + p2.nombre);
console.log("De: " + p2.zona);
console.log(`Especie : ${p2.especie}`); */

// ###############################################################

// Contador de visitas web

/* class Contador {
  static totalVisitas = 0;

  constructor() {
    Contador.totalVisitas++;
  }

  static obtenerTotalVisitas() {
    return `El sitio ha recibido ${Contador.totalVisitas} visitas.`;
  }
}

// Simulando visitas al sitio

const visita = new Contador();
const visita1 = new Contador();
const visita2= new Contador();
const visita3 = new Contador();

console.log(Contador.obtenerTotalVisitas()); */

// #############   Hand On Lab para cerrar clase 1  ##########################

/* class Persona {
  // propiedad estatica
  static cantidadPersonas = 0;
  //  constuctor
  constructor(nombre, edad, ciudad, vida) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida;
    // contador de personas creadas
    Persona.cantidadPersonas++;
  }
  comer(cantidad) {
    if (this.vida + cantidad > 150) {
      console.log(
        `${this.nombre} no puede comer mas, vida máxima alcanzada (150).`
      );
    } else {
      this.vida = this.vida + cantidad;
      console.log(
        `${this.nombre} ha comido y ahora tiene ${this.vida} de vida.`
      );
    }
  }
  trabajar(horas) {
    if (this.vida - horas < 50) {
      console.log(
        `${this.nombre} no puede realizar mas horas de trabajo, tope de actividad máxima alcanzado (50)`
      );
    } else {
      this.vida -= horas;
      console.log(
        `${this.nombre} ha trabajado y ahora tiene ${this.vida} de vida.`
      );
    }
  }
  mudarse(ciudad) {
    this.ciudad = ciudad;
    this.vida -= 20;
    console.log(
      `${this.nombre} se ha mudado a ${this.ciudad} y ahora tiene ${this.vida} de vida.`
    );
  }
}

const persona1 = new Persona("Juan", 30, "Madrid", 100);
const persona2 = new Persona("María", 25, "Barcelona", 120);
const persona3 = new Persona("Pedro", 40, "Valencia", 80);
const persona4 = new Persona("Diego", 20, "Murcia", 40);

// Probar los métodos
persona1.comer(60);
persona2.trabajar(10);
persona3.mudarse("Sevilla");
persona2.mudarse("Madrid");
persona4.mudarse("Getafe");

// Verificar la cantidad de personas
console.log(
  `Cantidad total de personas controladas: ${Persona.cantidadPersonas}`
);
 */

// ################   Clase Contador    ##########################

class Contador {
  // contador global
  static cuentaGlobal = 0;

  constructor(responsable) {
    this.responsable = responsable;
    this.cuentaIndividual = 0;
  }
  getResponsable() {
    return this.responsable;
  }
  contar() {
    this.cuentaIndividual++;
    Contador.cuentaGlobal++;
  }
  getCuentaIndividual() {
    return this.cuentaIndividual;
  }
  getCuentaGlobal() {
    return Contador.cuentaGlobal;
  }
}

const contador1 = new Contador("Juan");
const contador2 = new Contador("Maria");
const contador3 = new Contador("José Luis");

contador1.contar();
contador1.contar();
contador3.contar();
contador2.contar();

console.log(
  `${contador1.getResponsable()} tiene ${contador1.getCuentaIndividual()} conteos individuales.`
);
console.log(
  `${contador2.getResponsable()} tiene ${contador2.getCuentaIndividual()} conteos individuales.`
);
console.log(
  `${contador3.getResponsable()} tiene ${contador3.getCuentaIndividual()} conteos individuales.`
);
console.log(`El total global de conteos es ${Contador.cuentaGlobal}.`);
