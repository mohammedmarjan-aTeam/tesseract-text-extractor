const path = require('path');
const poppler = require('pdf-poppler');

const convertPdfToImages = async (pdfPath, outputDir) => {
    const options = {
        format: 'png',
        out_dir: outputDir,
        out_prefix: path.basename(pdfPath, path.extname(pdfPath)),
        page: null,
        scale: 1024 // scale option to reduce the image size
    };

    try {
        await poppler.convert(pdfPath, options);
    } catch (err) {
        throw new Error(`Error converting PDF to images: ${err.message}`);
    }
};

module.exports = { convertPdfToImages };