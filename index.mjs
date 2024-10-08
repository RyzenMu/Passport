import express from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from 'passport';
import './strategies/local-strategy.mjs'


const app = express();

app.use(express.json());
app.use(cookieParser("helloworld"));
app.use(
    session({
        secret:"anson the dev",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000 * 60,
        }
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.post('/api/auth', passport.authenticate("local"), (request, response)=> {

})
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Running on Port ${PORT}`);    
})