import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { router as authRouter } from "./routes/authRoute";
import { api } from "./config";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(`${api.mainLink}/auth`, authRouter);

app.listen(port, () => {
  console.log(`server run on start ${port}`);
});
