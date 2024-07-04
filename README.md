# Tesseract Text Extractor

This project is a Node.js application that extracts text from PDFs and images using Tesseract OCR. It provides a single API endpoint to upload files and get the extracted text as a response.

## Features

- Supports PDF and image files (PNG, JPG, JPEG)
- Converts PDF pages to images using `pdf-poppler`
- Uses Tesseract.js for Optical Character Recognition (OCR)
- Provides a unified API endpoint for file uploads and text extraction

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohammedmarjan-aTeam/tesseract-text-extractor
   cd tesseract-text-extractor
    ```
2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm run serve
    ```

2. The server will run on port 3010 by default. You can change the port by setting the PORT environment variable.

3. Use a tool like curl or Postman to test the API. Here's an example using curl:
    For PDF:

    ```bash
    curl -X POST -F "file=@/path/to/your/file.pdf" http://localhost:3010/api/upload
    ```
    For Image:

    ```bash
    curl -X POST -F "file=@/path/to/your/file.png" http://localhost:3010/api/upload
    ```

4. The API will respond with the extracted text from the uploaded file.

## About OCR and Tesseract
### What is OCR?
Optical Character Recognition (OCR) is the process of converting different types of documents, such as scanned paper documents, PDFs, or images captured by a digital camera, into editable and searchable data. OCR technology is used to digitize printed texts so that they can be electronically edited, searched, stored more compactly, displayed on-line, and used in machine processes such as cognitive computing, machine translation, text-to-speech, key data, and text mining.

### What is Tesseract?
Tesseract is an open-source OCR engine that was originally developed by HP and is now maintained by Google. It is widely considered one of the most accurate and versatile OCR engines available today. Tesseract can recognize text in multiple languages and output it in various formats including plain text, hOCR (HTML for OCR), and PDF. For more information about Tesseract, you can visit its official repository on [GitHub](https://github.com/tesseract-ocr/tesseract).

### Additional Resources
* [Tesseract OCR GitHub Repository](https://github.com/tesseract-ocr/tesseract)
* [Tesseract.js GitHub Repository](https://github.com/naptha/tesseract.js)
* [Wikipedia: Optical Character Recognition](https://en.wikipedia.org/wiki/Optical_character_recognition)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.