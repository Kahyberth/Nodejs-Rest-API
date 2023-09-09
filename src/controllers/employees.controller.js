import { pool } from "../db.js";


export const getEmployees = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.send(rows);
}   

export const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);
    if (rows.length <= 0) return res.status(404).json({ message: "Employee not found" });
    res.send(rows[0]);
}

export const updateEmployeeById = async (req, res) => {
    res.send("Actualizando un empleado");
}

export const deleteEmployeeById = async (req, res) => {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);
    if (result.affectedRows <= 0) return res.status(404).json({ message: "Employee not found"});
    res.sendStatus(204);
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