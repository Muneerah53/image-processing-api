import path from 'path';
import resizeImage from '../utils/image-proccesing';

const width = 300;
const height = 200;
const thumbPath = path.join(__dirname, '../../assets/thumb', `testThumb.jpg`);
describe('Test image proccesing', () => {
    it('resize an existing image', async () => {
        const imgPath: string = path.join(
            __dirname,
            '../../assets/full',
            `fjord.jpg`
        );
        const result = await resizeImage(imgPath, width, height, thumbPath);
        expect(result).toBe(true);
    });
    it('resize an image that doesnt exist', async () => {
        const imgPath: string = path.join(
            __dirname,
            '../../assets/full',
            `cat.jpg`
        );
        const result = await resizeImage(imgPath, width, height, thumbPath);
        expect(result).toBe(false);
    });
});
