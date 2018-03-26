const Tesseract = require('tesseract.js');
const fs = require('fs');
const natural = require('natural');


function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      console.log(err);
      return;
    }
    filenames.forEach((filename, i) => {
      fs.readFile(dirname + filename, 'utf-8', (err, content) => {
        console.log(filename);
        Tesseract.recognize(`images/${filename}`, { lang: 'ind' })
          .progress((p) => {
            console.log('progress', p);
          })
          .catch(err => console.error(err))
          .then((result) => {
            console.log(result.text);
            const stream = fs.createWriteStream(`text-result/${filename.slice(0, -4)}.txt`);
            stream.write(result.text);
            console.log(`Total File berhasil di ekstraksi ${i + 1} file`);
          });
      });
    });
  });
}

readFiles('images');

const tokenizer = new natural.WordTokenizer();

