const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');
const { convertPdfToImages } = require('../utils/pdfUtils');

const processFile = async (req, res) => {
    const { file } = req;
    if (!file) {
        return res.status(400).json({ error: 'No file provided' });
    }

    const filePath = path.join(__dirname, '../', file.path);
    const fileExt = path.extname(file.originalname).toLowerCase();

    if (fileExt === '.pdf') {
        // Handle PDF
        const outputDir = path.join(__dirname, '../uploads');

        try {
            await convertPdfToImages(filePath, outputDir);

            const imageFiles = fs.readdirSync(outputDir).filter(file => file.endsWith('.png'));
            let text = '';

            for (const imageFile of imageFiles) {
                const imagePath = path.join(outputDir, imageFile);
                const result = await Tesseract.recognize(imagePath, 'eng');
                text += result.data.text + '\n';
                fs.unlinkSync(imagePath); // Clean up the image file
            }

            fs.unlinkSync(filePath); // Clean up the uploaded PDF
            res.json({ text });
        } catch (error) {
            console.error('Error processing request:', error);
            fs.unlinkSync(filePath);
            res.status(500).json({ error: error.message });
        }
    } else if (['.png', '.jpg', '.jpeg'].includes(fileExt)) {
        // Handle image
        Tesseract.recognize(filePath, 'eng')
            .then(({ data: { text } }) => {
                fs.unlinkSync(filePath); // Clean up the uploaded file
                res.json({ text });
            })
            .catch(err => {
                fs.unlinkSync(filePath); // Clean up the uploaded file
                res.status(500).json({ error: err.message });
            });
    } else {
        fs.unlinkSync(filePath); // Clean up the uploaded file
        res.status(400).json({ error: 'Unsupported file type' });
    }
};

module.exports = { processFile };
