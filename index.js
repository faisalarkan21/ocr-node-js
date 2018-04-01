
const BlueBird = require('bluebird');

const OcrRead = require('./src/ocr-scan');
const Classification = require('./src/classification');


/**
 * @function
 * Read OCR from folder images
 */
OcrRead('images/', (result) => {
  Classification(result);
});

