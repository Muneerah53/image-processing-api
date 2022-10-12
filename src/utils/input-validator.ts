import { imgExists } from './file-handler';

const validateQuery = (
    filename: string,
    filepath: string,
    width: string,
    height: string
): string => {
    if (!filename) {
        return 'Oops: Missing image name. Please enter the filename in the URL.';
    }

    if (!imgExists(filepath)) return 'Uh oh: Input Image Does not exist.';

    if (!width && !height) return '';

    const imgWidth:number  = parseInt(width);
    const imgHeight: number = parseInt(height);

    if (isNaN(imgWidth) || isNaN(imgHeight))
        return 'Invalid values: width and height must be numerical values.';

    if (imgWidth <= 0 || imgHeight <= 0)
        return 'Invalid values: width and height must be positive integers above zero.';

    return '';
};

export default validateQuery;
