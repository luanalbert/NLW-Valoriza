import express from "express";

const app = express();

const port = 3000;  


app.get("/test", (req, res) => {
    return res.send("Ola NLW");
}); 

app.post("/test-post", (req,res) =>{
    return res.send("Ola NLW POST")
})

app.listen(port, () => console.log(`Server is running in port ${port}`))