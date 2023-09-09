import { Router } from "express";
import { deleteEmployeeById, getEmployeeById, postEmployee, updateEmployeeById, getEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get('/employees/:id', getEmployeeById);

router.post("/employees", postEmployee);

router.put("/employees", updateEmployeeById);

router.delete("/employees", deleteEmployeeById);

export default router;