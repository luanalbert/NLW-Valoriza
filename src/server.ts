import "reflect-metadata";
import express from "express";
import "./database";
import { router } from "../routes";

const app = express();

const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server is running in port ${port}`))