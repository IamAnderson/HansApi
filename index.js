const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const productRoute = require("./route/product");
const bodyParser = require("body-parser");


app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.get("/", (req, res) => {
    res.send("Api is working..")
});


app.use("/api/products/", productRoute)



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Db connected and Server is running at: http://localhost:${process.env.PORT}/`);
    });
})
.catch((err) => {console.log("Err:", err); process.exit(1)});


