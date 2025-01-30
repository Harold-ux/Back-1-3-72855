import { Router } from "express";
import { indexView, productView, cartView, profileView } from "../controllers/views.controller.js";

const viewsRouter = Router();

// Renderizar la vista index.handlebars
viewsRouter.get("/", indexView);
viewsRouter.get("/product/:pid", productView);
viewsRouter.get("/cart", cartView);
viewsRouter.get("/profile/:uid", profileView);

export default viewsRouter;
