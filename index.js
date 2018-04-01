const natural = require('natural');
const fs = require('fs');

const classifier = new natural.BayesClassifier();
const OcrRead = require('./src/ocr-scan');

/**
 * @function
 * Read OCR from folder images
 */
OcrRead('images');


const filename = 'text-result/Contoh Surat Lamaran Kerja Administrasi.txt';

classifier.addDocument('Surat Lamaran Pekerjaan', 'surat-lamaran-pekerjaan');
classifier.addDocument('ayam', 'buy');
classifier.addDocument('bayem', 'sell');
classifier.addDocument('jengkol', 'sell');

classifier.train();


(async function classify() {
  const result = await fs.readFileSync(filename, 'utf8');


  console.log(classifier.classify(result));
  console.log(classifier.getClassifications(result));
}());

