import express from "express";
import rootRouter from "./routes/root.js";


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './bt2/views');

app.use("/", rootRouter);
app.use("/Login", rootRouter);


app.listen(port, () => {
    console.log("Server started on port " + port + "!!!");
});