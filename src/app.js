// Don't add any API code or business logic here directly
import express from 'express';
import {usersRouter} from './controllers/route';
import bodyParser from 'body-parser';
const app = express();
const cors = require('cors');
const helmet = require('helmet');

let corsOptions = {
    origin: 'localhost:4000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({limit: '100mb', extended: true}));
app.use(bodyParser.json({limit: '100mb', extended: true}));

// enable cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


app.get('/', (req, res) => {
    res.send('OK');
});

app.use('/api/users', usersRouter);

export { app };
