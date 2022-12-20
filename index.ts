import express from 'express';
import dotenv from 'dotenv';

import routes from './src/routes/index';
import cors from './src/middlewares/cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9090;

cors(app);
routes(app);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));