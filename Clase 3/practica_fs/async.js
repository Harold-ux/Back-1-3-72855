/* import { error, log } from "console";
import fs from "fs";

const path = "./practica_fs/data.json";
const data = JSON.stringify([{ product: 1 }, { product: 2 }]); */

// ejercicio de verificacion de forma sincrona con callbacks

/* const verify = fs.existsSync(path);
console.log(verify);

if (!verify) {
  console.log("No existe el archivo y lo crea de forma asincrona");
  fs.writeFile(path, data, (error) => {
    if (error) {
      console.log(error);
    }
  });
} */

///////////////////////////////////////////////////////////////////////////

// ahora un ejercicio con readfile, hay que parsear la respuesta ya que llega en string

/* fs.readFile(path, "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(data));
  }
});
 */

///////////////////////////////////////////////////////////////////////////////////////

// ahora un ejercicio para eliminar de forma asincrona

/* fs.unlink(path, (error) => {
  if (error) {
    console.error("Error al eliminar el archivo:", error);
    return;
  } else {
    console.log("El archivo ha sido eliminado con exito");
  }
}); */

/////////////////////////////////////////////////////////////////////////
