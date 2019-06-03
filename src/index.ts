import bodyParser from "body-Parser";
import express from "express";
import Routes from "./routes/index";

var app = express();


app.use('/',Routes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Server running on port localhost:${PORT}!`),
);