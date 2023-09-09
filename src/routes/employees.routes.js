import { Router } from "express";
import { deleteEmployeeById, getEmployeeById, postEmployee, updateEmployeeById } from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployeeById);

router.post("/employees", postEmployee);

router.put("/employees", updateEmployeeById);

router.delete("/employees", deleteEmployeeById);

export default router;