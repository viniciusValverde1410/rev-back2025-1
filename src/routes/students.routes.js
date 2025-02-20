import {Router } from "express";

import {
    getstudents,
    getstudent,
    createstudent,
    updatestudent,
    deletestudent,   
} from "../controllers/students.controller.js";

const studentsRouter = Router();

studentsRouter.get("/", getstudents);
studentsRouter.get("/:id", getstudent);
studentsRouter.get("/", createstudent);
studentsRouter.get("/:id", updatestudent);
studentsRouter.get("/:id", deletestudent);

export default studentsRouter;