import { Router } from "express";
import { createProduct, readProducts, readOne, updateProduct, deleteProduct } from "../../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.get("/", readProducts);
productsRouter.post("/", createProduct);
productsRouter.get("/:pid", readOne);
productsRouter.put("/:pid", updateProduct);
productsRouter.delete("/:pid", deleteProduct);

export default productsRouter;
