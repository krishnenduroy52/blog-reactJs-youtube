const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");

require("dotenv").config();

app.use(cors());
app.use(express.json());

try {
    mongoose.connect(process.env.MONGO_DB)
    console.log("Connection Successful")
} catch (error) {
    console.log(error)
}

app.use("/", require("./Routes/blogRoute"))

app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}`);
})
