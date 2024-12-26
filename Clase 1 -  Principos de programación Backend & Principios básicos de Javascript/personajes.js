const nombre1 = "Peter Parker";
const ciudad1 = "New York";
let edad1 = 18;

const habilidades1 = [
  "Superhuman strength, speed, agility, reflexes, and durability",
  "Ability to cling to solid surfaces",
  "Precognitive spider-sense",
  "Genius-level intellect",
  "Skilled hand-to-hand combatant",
  "Proficient scientist and engineer",
  "Utilizes wrist-mounted web-shooters",
];

edad1 += 15;

// console.log(nombre1);
// console.log(ciudad1);
// console.log(habilidades1);
// console.log(edad1);

const nombre2 = "Natasha Romanova";
const ciudad2 = "Moscú";
let edad2 = 30;
const habilidades2 = [
  "Expert marksman and mastery of various weapons",
  "Expert martial artist and hand-to-hand combatant",
  "Slowed aging, and enhanced immune system",
  "Expert spy",
];

// ###########################################################################################

if (edad1 > edad2) {
  const texto = "El personaje 1 es mayor al 2";
  // console.log(texto);
}else{
  const texto = "El personaje 2 es mayor al 1"
  // console.log(texto);
}



// ###########################################################################################

edad2 += 5;

// console.log(nombre2);
// console.log(ciudad2);
// console.log(habilidades2);
// console.log(edad2);

try{
  if (edad1 > edad2) {
    const diferencia = edad1 - edad2;
    const text = "El personaje 1 es mayor al 2 por " + diferencia + " años";
    // console.log(text);
  }
  else if (edad1 < edad2){
    const diferencia = (edad2 - edad1);
    "El personaje 2 es mayor al 1 por " + diferencia + " años"
  }
} catch (error) {
  console.error("Ocurrió un error al comparar las edades:", error);
}



// #########################################################################33

const spiderman = {
  name: nombre1,
  city: ciudad1,
  age: edad1,
  abilities: habilidades1,
};
spiderman.teams = ["xmen", "avengers", "young avengers"]
spiderman["movies"] = ["spiderman 1", "spiderman 2", "spiderman 3", "civil war", "avengers 3", "avengers 4" ]
// console.log(spiderman);

const blackwidow = {
  name: nombre2,
  city: ciudad2,
  age: edad2,
  abilities: habilidades2,
};

const texto = `Spiderman en realidad es ${spiderman.name} 
y vive en un dpto de ${spiderman.city} con su tía May`
// console.log(texto);

function generarTemplate(personaje) {
  const template = `${personaje.name} vive en ${personaje.city} y tiene ${personaje.age} años`
  return template  
}

// console.log(generarTemplate(blackwidow));
// console.log(generarTemplate(spiderman));


const arrayPersonajes = [spiderman, blackwidow]
for (let personaje of arrayPersonajes){
const templateGenerado = generarTemplate(personaje)
// console.log(templateGenerado);
}


function generaTodosLosTemplate(arrayPersonajes) {
  for (let personaje of arrayPersonajes){
    const templateGenerado = generarTemplate(personaje)
    console.log(templateGenerado);
    }
}

    const templateGenerado = generarTemplate(personaje)
    generaTodosLosTemplate(arrayPersonajes)