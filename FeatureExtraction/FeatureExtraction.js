const fs = require('fs');
var csvdata = require('csvdata');
var writeFile = require('write');
var createFile = require('create-file');
let writeStream = fs.createWriteStream('secret.txt');
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('French_v1.txt');
var sw = require('stopword');
    var total ="";
// var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
lr.on('error', function (err) {
	// 'err' contains error object

});
var arr1=[];
lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
    total = line.toLowerCase();
    var oldString = total.split(' ');
    // sw.sv contains swedish stopwords
    var newString = sw.removeStopwords(oldString, sw.fr);
    newString = newString +'\n';
    arr1.push(newString);
    // logStream.write(newString);
    fs.appendFile('FrenchStopWordsRemoved.txt', newString, (err) => {  
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log('saved!');
    });
    console.log(total);
});

lr.on('end', function () {
	// All lines are read, file is closed now.
    // console.log(total);
     console.log(total.length);
     csvdata.write('./stoppedString.csv', arr1, {header: 'Text'});
    // console.log(newString);
    // console.log(newString.length);
});