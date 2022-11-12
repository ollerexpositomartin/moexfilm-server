import express from "express";
import Auth from './routes/auth'
import bodyParser from "body-parser";
import { proxy } from "./proxy";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: false}))
app.use(proxy);
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text())

app.use('/auth',Auth)

app.listen( process.env.PORT || 8080, () => {
    console.log( `server started at http://localhost:${ port } 🚀`);
});