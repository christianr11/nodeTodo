require("dotenv").config();
const express = require("express");
const connectDb = require("./database/connection");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");

const app = express();

connectDb();

app.use(express.json());
app.use(cors());
app.use("/api/v1/todo", todoRoutes);

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
