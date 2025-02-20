import {Router } from "express";

import {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,   
} from "../controllers/users.controller.js";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUsersById);
usersRouter.get("/", createUser);
usersRouter.get("/:id", updateUser);
usersRouter.get("/:id", deleteUser);

export default usersRouter;