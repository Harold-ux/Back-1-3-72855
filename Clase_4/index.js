import express, { response } from "express";
import productsManager from "./src/data/fs/products.fs.js";

// ejecutando el modulo express se crea un servidor con mas condiguraciones que el servidor hecho con http.createServer() de la clase 3

/* server settings */
const server = express();
const port = 8080;
const ready = () => console.log(`Server running on port ${port}`);
server.listen(port, ready);

/* funcionalidades aplicadas al servidor */
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

/* ruta para usar post */

/* router */
const indexPoint = "/";
const indexCb = (req, res) => res.status(200).send("WELCOME TO COMMERCE");
server.get(indexPoint, indexCb);

const apiPoint = "/api";
const apiCb = (req, res) => res.status(200).send("WELCOME TO MY API!");
server.get(apiPoint, apiCb);

//////////////////////////////////////////////////////////

// Ahora, rutas que nos sirvan con los productos de nuestro ecommerce.

const readOneProduct = async (req, res) => {
  const { pid } = req.params;
  const one = await productsManager.readOne(pid);
  if (one) {
    return res.status(200).json({ response: one });
  }
  return res.status(404).json({ response: "Producto no encontrado" });
};

server.get("/api/products/:pid", readOneProduct);

/////////////////////// (metodo GET) para leer todos los productos

const readProducts = async (req, res) => {
  const { category } = req.query;
  const all = await productsManager.readAll(category);
  if (all.length > 0) {
    return res.status(200).json({ response: all });
  }
  return res.status(404).json({ response: "Producto no encontrado" });
};

server.get("/api/products", readProducts);

// ahora, creamos una ruta para postear (metodo POST) un nuevo producto

const createProduct = async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const one = await productsManager.create(data);
  return res.status(201).json({ response: one });
};

server.post("/api/products", createProduct);

///////////////////

// ejemplos de rutas con parametros y consultas:

/* server.get("/api/:name/:age", (req, res) => {
  console.log(req);
  const { name, age } = req.params;
  const message = `Hola, ${name}! tienes ${age} años`;
  return res.status(200).send(message);
}); */

////////////////////////////////////////////////

// Request: query ---> consultas http

// las consultas son opcionales y pueden ir cuantas preguntas quieras

/* server.get("/api/welcome", (req, res) => {
  const { name, age } = req.query;
  const message = `Hola ${name || "Coder"}!, tienes ${age || 18} años!`;
  return res.status(200).send(message);
});
 */
// http://localhost:8080/api/welcome?name=pepe&age=30

///////////////////////////////////////////////

/* las rutas inexistentes siempre van al final porque el * es de prioridad en el orden*/
server.get("*", (req, res) => res.status(404).send("NOT FOUND POINT!"));
