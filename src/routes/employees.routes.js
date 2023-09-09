import { Router } from "express";
import { deleteEmployeeById, getEmployeeById, postEmployee, updateEmployeeById, getEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployeeById);

router.post('/employees/:id', postEmployee);

router.put('/employees/:id', updateEmployeeById);

router.delete('/employees/:id', deleteEmployeeById);

export default router;