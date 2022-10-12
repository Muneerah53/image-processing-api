import fs from 'fs';
import path from 'path';

// refernce: https://stackoverflow.com/a/69891670
const fullImgPath = (imgName: string): string => {
    return path.join(__dirname, '../../assets/full', `${imgName}.jpg`);
};

const thumbImgPath = (imgName: string, w: number, h: number): string => {
    return path.join(
        __dirname,
        '../../assets/thumb',
        `${imgName}-${w}x${h}.jpg`
    );
};

// refernce: https://nodejs.org/api/fs.html#fsexistssyncpath
const imgExists = (path: string): boolean => {
    return fs.existsSync(path);
};

export { fullImgPath, thumbImgPath, imgExists };
