import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { __dirname, rootDir } from "./src/utils/utils.js";
import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import viewsRouter from "./src/routers/views.router.js";
import path from "path";
import { Server } from "socket.io";
import http from "http";
import productsManager from "./src/data/fs/products.en.js";

// Configuración del servidor
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 8080;

// WebSocket
io.on("connection", async (socket) => {
  console.log("Nuevo usuario conectado");

  // Enviar la lista de productos al conectar
  socket.emit("updateProducts", await productsManager.readAll());

  // Agregar un producto
  socket.on("addProduct", async (productData) => {
    if (!productData.image) {
      productData.image =
        "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"; // Imagen por defecto
    }
    await productsManager.create(productData);
    io.emit("updateProducts", await productsManager.readAll());
  });

  // Eliminar un producto
  socket.on("deleteProduct", async (productId) => {
    await productsManager.delete(productId);
    io.emit("updateProducts", await productsManager.readAll());
  });

  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});

// Configuración del motor de plantillas Handlebars
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(rootDir, "src", "views", "layouts"),
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(rootDir, "src", "views"));

// Middlewares
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use("/", viewsRouter);
app.use("/", router);
app.use(errorHandler);
app.use(pathHandler);

// Iniciar servidor
server.listen(port, () =>
  console.log(`Servidor corriendo en el puerto ${port}`)
);
