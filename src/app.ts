import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { port } from '../app.json';
import corsConfig from './corsConfig';

const app: Express = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ ...corsConfig }));

app.listen(process.env.PORT || port, (): void => {

    console.log(`Running on port: ${process.env.PORT || port}`)

})