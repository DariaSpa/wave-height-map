import express from "express";
import cors from "cors";
import waveRoutes from "./routes/waveRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", waveRoutes);

app.get("/", (req, res) => res.send("Wave Height API"));

export default app;