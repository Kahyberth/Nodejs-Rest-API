import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
const app = express();
app.listen(3000);
app.use(express.json());
app.use(employeesRoutes);

console.log("Server is running on port 3000");