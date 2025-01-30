import { faker } from "@faker-js/faker";
import fs from "fs/promises";

const path = "data/fs/files/products.json";

class ProductsManager {
  constructor() {
    this.path = path;
    this.init()
      .then(() => console.log("Inicialización completa"))
      .catch(console.error);
  }
  async init() {
    try {
      await fs.access(this.path);
      console.log(this.path);
    } catch (error) {
      console.error("Archivo no encontrado... creando uno nuevo.");
      await fs.writeFile(this.path, JSON.stringify([]));
      console.log(`Archivo creado en: ${this.path}`);
    }
  }
  /////// ---> método generico para leer y parsear cualquier archivo
  async read() {
    try {
      let data = await fs.readFile(this.path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      return [];
    }
  }
  /////// ---> método generico para sobreescribir cualquier archivo dando 
  // formato con stringify y la configuracion del 3r parametro

  async write(data) {  //---> la variable data es la que nos dá el cliente
    try {
      const jsonData = JSON.stringify(data, null, 2);
      await fs.writeFile(this.path, jsonData);
    } catch (error) {
      console.error("Error al escribir en el archivo:", error);
    }
  }
  //// ---> metodo para crear un producto
  async create() {
    try {
      const _id = faker.database.mongodbObjectId();
      const title = faker.commerce.productName();
      const price = faker.commerce.price({ min: 10, max: 500, dec: 2 });
      const stock = faker.number.int({ min: 0, max: 1000 });
      const photo = faker.image.url();
      const category = faker.helpers.arrayElement([
        "ninguna",
        "celulares",
        "computadoras",
        "accesorios",
      ]);

      const newProduct = {
        _id,
        title,
        price,
        stock,
        photo,
        category,
      };
      // una vez construido el producto
      //   se lee el archivo
      const dataOfFile = await this.read();
      // luego se pushea el producto creado
      dataOfFile.push(newProduct);
      // se sobreescribe el archivo con la nueva data
      await this.write(dataOfFile);
      // retorna el nuevo producto al cliente
      return newProduct;
    } catch (error) {
      throw error;
    }
  }
}

const productsManager = new ProductsManager();
export default productsManager;
