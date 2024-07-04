const express = require('express');
const multer = require('multer');
const { processFile } = require('../controllers/fileProcessor.controller');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), processFile);

module.exports = router;
