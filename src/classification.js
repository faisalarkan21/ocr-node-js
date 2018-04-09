const natural = require('natural');
const fs = require('fs');
const keyword = require('./config/classification-key');


const classifier = new natural.BayesClassifier();


classifier.addDocument(keyword.suratLamaran.key, keyword.suratLamaran.value);
classifier.addDocument(keyword.suratPenelitian.key, keyword.suratPenelitian.value);
classifier.addDocument(keyword.suratKerjasama.key, keyword.suratKerjasama.value);
classifier.train();


function classifyFile(readText) {
  console.log(classifier.classify(readText));
  console.log(classifier.getClassifications(readText));
}


module.exports = classifyFile;
