import { Router } from "express";
import { createUser, readOneUser, readAllUsers, updateUser, deleteUser } from "../../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.post("/", createUser);
usersRouter.get("/:uid", readOneUser);
usersRouter.get("/", readAllUsers);
usersRouter.put("/:uid", updateUser);
usersRouter.delete("/:uid", deleteUser);

export default usersRouter;
// Exportación del router para su uso en `index.api.js`
