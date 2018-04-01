const Tesseract = require('tesseract.js');
const fs = require('fs');

async function readFiles(dirname, callback) {
  const filenames = await fs.readdirSync(dirname);
  filenames.forEach(async (filename, i) => {
    Tesseract.recognize(`images/${filename}`, { lang: 'ind' }).progress((p) => {
      // console.log('Proses', p);
    })
      .catch(err => console.error(err))
      .then((result) => {
        const stream = fs.createWriteStream(`ocr-result/${filename.slice(0, -4)}.txt`);
        stream.write(result.text);
        console.log(`\nTotal File berhasil di ekstraksi ${i + 1} file\n`);
        callback(result.text);
      });
  });
}

module.exports = readFiles;
