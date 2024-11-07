import express from "express";
import { config } from "dotenv";
const app = express();

config({
  path: "./data/config.env",
});
const port = process.env.PORT | 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
