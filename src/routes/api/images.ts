// refernce: https://expressjs.com/en/api.html
import express from 'express';
import resize from '../../utils/image-proccesing';
import {
    thumbImgPath,
    imgExists,
    fullImgPath,
} from '../../utils/file-handler';
import validateQuery from '../../utils/input-validator';

const images: express.Router = express.Router();

images.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        try {
            const fileName: string = req.query.filename as string;
            const width: string = req.query.width as string;
            const height: string = req.query.height as string;

            let imgPath: string = fullImgPath(fileName);

            const validateMsg: string = validateQuery(fileName, imgPath, width, height);

            // if error is found, send an error message
            if (validateMsg) {
                res.status(400).send(validateMsg);
                return;
            }

            if (width && height) {
                const imgWidth: number = parseInt(width);
                const imgHeight: number = parseInt(height);

                const thumbPath: string = thumbImgPath(fileName, imgWidth, imgHeight);
                if (!imgExists(thumbPath)) {
                    const isResized: boolean = await resize(
                        imgPath,
                        imgWidth,
                        imgHeight,
                        thumbPath
                    );
                    // if resizing failed
                    if (!isResized) throw Error;
                }
                imgPath = thumbPath;
            }

            res.setHeader('Content-Type', 'image/jpg');
            res.sendFile(imgPath);
        } catch (error) {
            console.log('Processing Failed.');
            res.status(500).send(
                'Image Processing Failed. Please try again later.'
            );
        }
    }
);

export default images;
