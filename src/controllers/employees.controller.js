import { pool } from "../db.js";

export const getEmployeeById = async (req, res) => {
    res.send("Obteniendo un empleado");
}

export const updateEmployeeById = async (req, res) => {
    res.send("Actualizando un empleado");
}

export const deleteEmployeeById = async (req, res) => {
    res.send("Eliminando un empleado");
}

export const postEmployee = async (req, res) => {
    const { name, salary } = req.body;
    const [rows] = await pool.query("INSERT INTO employee(name, salary) VALUES (?, ?) ", [name, salary]);
    console.log("Usuario creado con el id: ", rows.insertId);
    res.send({
        id: rows.insertId,
        name,
        salary
    });
}