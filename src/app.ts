import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import { port } from '../app.json';
import corsConfig from './corsConfig';
import api from './controller/index';
const app: Express = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ ...corsConfig }));

app.use('/api', api);

app.listen(process.env.PORT || port, (): void => {
    console.log(`

    Running on port: ${process.env.PORT || port}
    
`);
});