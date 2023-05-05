import express from "express";
import dotenv from "dotenv";

import routes from "./src/routes/index";
import { access } from "./src/middlewares/";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9090;

access(app);
routes(app);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));