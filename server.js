const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Routes
const userRouter = require("./routes/userRoutes.js");

const app = express();

app.use(cors());

app.use(express.json());

app.use('/user', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));