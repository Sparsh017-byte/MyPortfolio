import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import messageRoutes from './routes/messageRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import connectDB from './config/db.js'

dotenv.config();
const app = express();
connectDB();

app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send("Api Running....")
});

app.use('/api',projectRoutes);
app.use('/api',messageRoutes);


export default app;
