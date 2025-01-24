import express from "express";
import router from "./src/routers/index.router.js";

// executing the express module creates a server

/* server settings */
const server = express();
const port = 8080;
const ready = () => console.log(`Server running on port ${port}`);
server.listen(port, ready);

/* functionalities applied to the server */
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

/* router */

server.use("/", router);
server.get("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});
