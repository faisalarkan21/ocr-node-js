const natural = require('natural');
const fs = require('fs');


const classifier = new natural.LogisticRegressionClassifier();


classifier.addDocument('Surat Lamaran Pekerjaan', 'surat-lamaran-pekerjaan');
classifier.addDocument('penelitian', 'surat-penelitian');
classifier.addDocument('kerjasama', 'surat-kerja-sama');
classifier.addDocument('jengkol', 'sell');

classifier.train();


function classifyFile(readText) {
  console.log(classifier.classify(readText));
  console.log(classifier.getClassifications(readText));
}


module.exports = classifyFile;
