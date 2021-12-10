require('../config/apm');
import { app } from './app';

// globals
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 4000;
import dotenv from 'dotenv';
dotenv.config();


app.listen(PORT, HOST, () => {
  console.log(`Express app is listening at http://${HOST}:${PORT}...`);
});
