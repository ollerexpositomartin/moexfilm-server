import express from "express";
import Auth from './routes/auth'
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/auth',Auth)


app.listen( port, () => {
    console.log( `server started at http://localhost:${ port } 🚀`);
} );