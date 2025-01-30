import { faker } from "@faker-js/faker";
import fs from "fs/promises";

const path = "./src/data/fs/files/users.json";

class UsersManager {
  constructor() {
    this.path = path;
    this.init()
      .then(() => console.log("Inicialización completa"))
      .catch(console.error);
  }
  async init() {
    try {
      await fs.access(this.path);
      console.log(`El archivo ya existe: ${this.path}`);
    } catch (error) {
      console.error(
        "El archivo no existe o no se puede acceder a el... creando una instancia"
      );
      await fs.writeFile(path, JSON.stringify([]));
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
    }
  }
  /////// ---> método generico para sobreescribir cualquier archivo dando
  //formato con stringify y la configuracion del 3r parametro

  async write(data) {
    //---> la variable data es la que nos dá el cliente
    try {
      const jsonData = JSON.stringify(data, null, 2);
      await fs.writeFile(this.path, jsonData);
    } catch (error) {
      console.error(error);
    }
  }
  async create() {
    try {
      const fullName = faker.person.fullName().toLocaleLowerCase().split(" ");
      const email = faker.internet.email();
      const address = faker.location.streetAddress();
      const user = {
        _id: faker.database.mongodbObjectId(),
        name: fullName[0],
        lastName: fullName[1],
        email: email,
        address: address,
        password: "hola1234",
        avatar: faker.image.avatar(),
        role: faker.helpers.arrayElement(["user", "admin", "premiun"]),
      };
      const dataCreada = await this.read();
      dataCreada.push(user);
      await this.write(dataCreada);
      console.log("Nuevo usuario creado:", user);
      return user;
    } catch (error) {
      throw new Error("Error al crear usuario");
    }
  }
}

const usersManager = new UsersManager();
(async () => {
  const users = await usersManager.read();
  console.log("Usuarios leídos:", users);
})();
export default usersManager;
