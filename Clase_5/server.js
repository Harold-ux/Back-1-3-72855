import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { __dirname, rootDir } from "./src/utils/utils.js";
import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import viewsRouter from "./src/routers/views.router.js";
import path from "path";

// ejecutando el módulo express se crea un servidor
const server = express();
const port = 8080;
const ready = () => console.log(`Server running on port ${port}`);
server.listen(port, ready);

// motor de plantillas
server.engine(
  "handlebars",
  engine({
    defaultLayout: "main", // layout principal
    layoutsDir: path.join(rootDir, "src", "views", "layouts"),
  })
);
server.set("view engine", "handlebars");
server.set("views", path.join(rootDir, "src", "views"));

// middlewares
server.use(morgan("dev")); // 1
server.use(express.static("public")); // 2
server.use("/assets", express.static("assets")); // 3
server.use(express.urlencoded({ extended: true })); // 4
server.use(express.json()); // 5

// router
server.use("/", viewsRouter); // Aquí se configura el enrutador de vistas
server.use("/", router); // Si quieres otro enrutador, lo puedes habilitar
server.use(errorHandler); // Manejador de errores
server.use(pathHandler); // Manejador de rutas

// servidor escuchando en el puerto 8080
