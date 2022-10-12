// refernce: https://expressjs.com/en/api.html
import express from 'express';
import resize from '../../utils/image-proccesing';
import {
    thumbImgPath,
    thumbImgExists,
    fullImgPath,
} from '../../utils/file-handler';
import validateQuery from '../../utils/input-validators';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
    try {
        const fileName: string = req.query.filename as string;
        const width = req.query.width as string;
        const height = req.query.height as string;

        let imgPath: string = fullImgPath(fileName);

        const validateMsg = validateQuery(fileName, imgPath, width, height);
        if (validateMsg) {
            res.status(400).send(validateMsg);
            return;
        }

        if (width && height) {
            const imgWidth = parseInt(width);
            const imgHeight = parseInt(height);

            const thumbPath = thumbImgPath(fileName, imgWidth, imgHeight);
            if (!thumbImgExists(thumbPath)) {
                const isResized = await resize(
                    imgPath,
                    imgWidth,
                    imgHeight,
                    thumbPath
                );
                if (!isResized) throw Error;
            }
            imgPath = thumbPath;
        }

        res.setHeader('Content-Type', 'image/jpg');
        res.sendFile(imgPath);
    } catch (error) {
        console.log('Processing Failed.');
        res.status(500).send('Image Processing Failed.');
    }
});

export default images;