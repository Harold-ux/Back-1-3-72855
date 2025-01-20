import express from "express";
import productsManager from "./src/data/fs/products.en.js";

// ejecutando el modulo express se crea un servidor con mas condiguraciones que el servidor hecho con http.createServer() de la clase 3

/* server settings */
const server = express();
const port = 8080;
const ready = () => console.log(`Server running on port ${port}`);
server.listen(port, ready);

/* funcionalidades aplicadas al servidor */
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

/* router */
// el router es un middleware que se encarga de manejar las rutas de la aplicacion
const apiPoint = "/";
const apiCb = (req, res) => res.status(200).send("WELCOME TO MY API!");
server.get(apiPoint, apiCb);

//---> Ahora, rutas que nos sirvan con los productos

const readOne = async (req, res) => {
  const { pid } = req.params;
  try {
    const one = await productsManager.readOne(pid);
    if (one) {
      return res.status(200).json({ response: one });
    }
    return res.status(404).json({ error: "Producto no encontrado" });
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener el producto" });
  }
};
server.get("/api/products/:pid", readOne);

//---> (metodo GET) para leer todos los productos
// Ruta para obtener todos los productos o filtrar por categoría

const readProducts = async (req, res) => {
  const { category } = req.query;
  try {
    const all = await productsManager.readAll(category);
    if (all.length > 0) {
      return res.status(200).json({ response: all });
    }
    return res.status(404).json({ error: "No se encontraron productos" });
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener los productos" });
  }
};
server.get("/api/products", readProducts);

//---> ahora, creamos una ruta para postear (metodo POST) un nuevo producto

const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    // Validar que todos los datos necesarios estén presentes
    if (
      !data.title ||
      !data.price ||
      !data.stock ||
      !data.photo ||
      !data.category
    ) {
      return res.status(400).json({
        error: "Faltan datos necesarios (title, price, stock, photo, category)",
      });
    }
    const one = await productsManager.create(data);
    return res.status(201).json({ response: one });
  } catch (error) {
    return res.status(500).json({ error: "Error al crear el producto" });
  }
};

server.post("/api/products", createProduct);

//---> ahora, creamos una ruta para actualizar (metodo PUT) un producto

const updateProduct = async (req, res) => {
  try {
    const { pid } = req.params;
    const data = req.body;
    const updatedProduct = await productsManager.updateOne(pid, data);
    if (!updatedProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    return res.status(200).json({ response: updatedProduct });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Error en la actualización";
    return res.status(status).json({ error: message });
  }
};


server.put("/api/products/:pid", updateProduct);

//---> ahora, creamos una ruta para borrar (DELETE) un producto

const deleteProduct = async (req, res) => {
  const { pid } = req.params;
  try {
    const one = await productsManager.deleteOne(pid);

    // Comprobar si el producto no se ha encontrado
    if (!one) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    return res
      .status(200)
      .json({ response: "Producto eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
server.delete("/api/products/:pid", deleteProduct);

/* las rutas inexistentes siempre van al final porque el * es de prioridad en el orden*/
server.get("*", (req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});
