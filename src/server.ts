import express, { Application } from "express";
import { PORT as port } from "./config"

import errorMiddleware from "./middleware/error.middleware";
import trackerRoute from "./routes/tracker.route";

const PORT = Number(port) || 8000;

const app: Application = express();

app.use(express.json());

app.use("/api", trackerRoute);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});