// refernce: https://expressjs.com/en/api.html

import express from 'express';
import images from './api/images';

const routes: express.Router = express.Router();

routes.use('/images', images);

routes.get('/', (req: express.Request, res: express.Response): void => {
    // refernce: https://stackoverflow.com/questions/32601424/render-raw-html-in-response-with-express#comment115693587_44882366

    res.setHeader('Content-type', 'text/html');
    res.send(
        '<h2>Welcome to image processing api</h2><p>Enter a url query that contains the image name as well as the optional width and height to specify the size.<li><b> Example1: </b> <a href="http://localhost:3000/api/images?filename=encenadaport">localhost:3000/api/images?filename=encenadaport</a></li><li><b> Example2: </b> <a href="http://localhost:3000/api/images?filename=fjord&width=200&height=200">localhost:3000/api/images?filename=fjord&width=200&height=200</a></li>'
    );
});
export default routes;
