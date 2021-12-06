const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");
// const cors = require("cors");

dotenv.config();

// use dotenv file to keep mongo password hidden
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("db connection succcessful"))
    .catch((e) => {
        console.log(e)
    });
/*
app.get("/api/test", () => {
    console.log("test is successful");
});
*/
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});