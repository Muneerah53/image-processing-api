import { fullImgExists } from './file-handler';

const validateQuery = (
    filename: string,
    filepath: string,
    width: string,
    height: string
): string => {
    if (!filename) {
        return 'Oops: Missing image name. Please enter the filename in the query.';
    }

    if (!fullImgExists(filepath)) return 'Input Image Does not exist.';

    if (!width && !height) return '';

    const imgWidth = parseInt(width);
    const imgHeight = parseInt(height);

    if (isNaN(imgWidth) || isNaN(imgHeight))
        return 'Invalid values: width and height must be numverical values.';

    if (imgWidth <= 0 || imgHeight <= 0)
        return 'Invalid values: width and height must be above zero.';

    return '';
};

export default validateQuery;
