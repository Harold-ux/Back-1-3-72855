/* import fs from "fs/promises";

const path = "./practica_fs/data.json";
const data = JSON.stringify([
  { Instancia: "Productos hechos con try/catch" },
  { product: 1 },
  { product: 2 },
]); */

// ---> uso de promesas con access

// --> con then y catch

/* fs.access(path).then(() =>
  console.log("El archivo existe").catch(() => {
    console.log("El archivo no existe, se crea a continuación...");
    fs.writeFile(path, JSON.stringify([])).then(() => {
      console.log("La sobreescritura se completó exitosamente");
    });
  })
); */

/////////////////////////////////////////

// --> con try y catch

/* async function check_create() {
  try {
    await fs.access(path);
    console.log("Archivo encontrado");
    return { success: true, message: "Archivo encontrado" };
  } catch (error) {
    console.error("Archivo no encontrado, creando una instancia");
  }
  try {
    await fs.writeFile(path, data);
    console.log("Archivo creado exitosamente");
    return { success: true, message: "Archivo creado exitosamente" };
  } catch (error) {
    console.log("Error al crear el archivo:", error);
    return {
      success: false,
      message: "Error al crear el archivo",
      error: error,
    };
  }
}

async function run() {
  const resultado = await check_create();
  console.log(JSON.stringify(resultado));
}

run(); */

/////////////////////////////////////////////////

// borrar con promesa

/* import fs from "fs/promises";

const path = "./data/practica_fs";
const data = JSON.stringify([
  { Instancia: "Productos hechos con try/catch" },
  { product: 1 },
  { product: 2 },
]);

async function borrarArchivo() {
  try {
    await fs.unlink(path);
    console.log("Archivo borrado con exito");
  } catch (error) {
    console.error('Error al borrar el archivo:', error);
  }
}

borrarArchivo();
 */