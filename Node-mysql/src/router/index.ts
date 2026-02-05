import express from "express";
import { AppDataSource } from "../data-source";
import cors from 'cors';
const app = express();
import authrouter from './router/auth'
const app = express();

app.use(cors())
app.use(express.json())
app.use(authrouter);


AppDataSource.initialize()

.then(async() =>  {
console.log("connected to the database");
app.listen(3000, () =>  {
    console.log('app running on port 3000');
});

.catch((error) => console.log(error));

}