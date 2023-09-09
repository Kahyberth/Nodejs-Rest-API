import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.send(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "Employee not found" });
    res.send(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEmployeeById = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?",
      [name, salary, id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Employee not found" });
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Employee not found" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postEmployee = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee(name, salary) VALUES (?, ?) ",
      [name, salary]
    );
    console.log("Usuario creado con el id: ", rows.insertId);
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
