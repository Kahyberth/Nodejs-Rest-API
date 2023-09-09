import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
export const app = express();


app.use(express.json());
app.use("/api/",employeesRoutes);

app.use((req,res,next)=>{
    res.status(404).json({message:"Not found"});
})

export default app;