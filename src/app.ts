import express from 'express';
import bodyParser from 'body-parser';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.route();
    }

    private middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    private route() {
        this.express.get('/', (req, res, next) => {
            res.send(`Node express base page.`);
        });
    }
}

export default new App().express;