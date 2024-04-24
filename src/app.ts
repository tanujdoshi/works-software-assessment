import express, { Express } from "express";
import router from "./routes/routes";
import connectToDB from "./config/db";
import { errorHandler } from "./utils/errorHandler";
import { MESSAGES } from "./utils/messages";
import swaggerDocs from "../swagger";

const app: Express = express();

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

swaggerDocs(app);
app.use("/api/v1/notes", router);
app.use((req, res, next) => {
  errorHandler(new Error(MESSAGES.API_NOT_FOUND), res);
});

export default app;
