import sharp from 'sharp';

// soruce: https://www.npmjs.com/package/sharp
async function resizeImage(
    fullPath: string,
    w: number,
    h: number,
    thumbPath: string
): Promise<boolean> {
    try {
        await sharp(fullPath)
            .resize({
                width: w,
                height: h,
            })
            .toFile(thumbPath); // thumb
        return true;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export default resizeImage;
