import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
