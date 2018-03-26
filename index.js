const Tesseract = require('tesseract.js');
const fs = require('fs');

const stream = fs.createWriteStream('result/ocr-result.txt');

fs.readdir('images', (err, files) => {
  console.log(files.length);
});


Tesseract.recognize('images/surat1.jpg', { lang: 'ind' })
  .progress((p) => {
    console.log('progress', p);
  })
  .catch(err => console.error(err))
  .then((result) => {
    console.log(result.text);
    stream.write(result.text);
    stream.end();
    process.exit(0);
  });

