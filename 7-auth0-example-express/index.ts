import express from 'express'
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet'
import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'

const authConfig = {
    domain: '',
    clientId: '',
    audience: 'http://localhost:3001', // audience needs to match app config on auth0.com website
}

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = `http://localhost:${appPort}`;

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({origin: appOrigin}));


const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),

    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithms: ["RS256"]
});

// @ts-ignore
app.get("/api/external", checkJwt, (req: express.Request, res: express.Response) => {
    res.send({
        msg: "Your access token was successfully validated!"
    });
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
