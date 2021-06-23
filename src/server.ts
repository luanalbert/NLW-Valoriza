import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "../routes";

import "./database";

const app = express();

const port = 3000;

app.use(express.json());
app.use(router);

//middleware de erros 4 parametros
app.use( (err: Error, req: Request, res: Response, next: NextFunction ) => {
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status:"error",
        message: "Internal server Error"
    })
})

app.listen(port, () => console.log(`Server is running on port ${port}`))