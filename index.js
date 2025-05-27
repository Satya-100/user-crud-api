const express = require("express");
const { MongoDBconnection } = require("./config/connection");
require("dotenv").config();
const userRouter = require("./routes/user.route.js");
const { logReq } = require("./middlewares/user.middleware.js");

const app = express();
PORT = process.env.PORT || 8000;

// Connecting MongoDB
MongoDBconnection(process.env.MONGODB_URI);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReq('log.txt'))

// Routes
app.use("/api/v1/user", userRouter)

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
