import { Router } from "express";
import studentsRouter from "./students.routes.js";
import usersRouter from "./users.routes.js";

const router = Router();

// Rota raiz para teste
router.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai Corinthians!" });
});

router.use("/students", studentsRouter);
router.use("/users", usersRouter);

export { router };