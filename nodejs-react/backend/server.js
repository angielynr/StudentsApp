require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const responseTimeMiddleware = require("./middleware/responseTimeMiddleware");
const connectDB = require("./mongodb");
const studentRoute = require("./routes/studentRoute");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(cors());
app.use(responseTimeMiddleware);

app.use(bodyParser.json());
app.use(router);

app.use("/api", studentRoute);

connectDB();

app.listen(process.env.HTTP_PORT, (err) => {
    console.log(`Server started at http://localhost:${process.env.HTTP_PORT}`);
    if (err) console.log("Error" + err);
});
