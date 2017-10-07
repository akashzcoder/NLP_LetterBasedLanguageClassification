const fs = require('fs');
var unique = require('array-unique');
var csvdata = require('csvdata');
var writeFile = require('write');
var createFile = require('create-file');
var unique = require('array-unique');
let writeStream = fs.createWriteStream('secret.txt');
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('Spanish_v1.txt');
var sw = require('stopword');
    var total ="";
// var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
lr.on('error', function (err) {
	// 'err' contains error object

});
var arr1=[];
var charArr=[];
var finalChars =[];
lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
    total = line.toLowerCase();
    charArr = charArr.concat(total.split(/(?=.)/u));
    charArr=unique(charArr);
    console.log(charArr);
    // final = final.push(charArr);
    // console.log(charArr);
    // var oldString = total.split(' ');
    // // sw.sv contains swedish stopwords
    // var newString = sw.removeStopwords(oldString, sw.fr);
    // newString = newString +'\n';
    // arr1.push(newString);
    // logStream.write(newString);
    // fs.appendFile('FrenchStopWordsRemoved.txt', newString, (err) => {  
    //     // throws an error, you could also catch it here
    //     if (err) throw err;

    //     // success case, the file was saved
    //     console.log('saved!');
    // });
    // console.log(total);
});

lr.on('end', function () {
	// All lines are read, file is closed now.
    // console.log(total);
     finalChars = unique(charArr);
     console.log(finalChars.length);
     for(var i=0;i<finalChars.length;i++){
         var c = finalChars[i] +'\n';
        fs.appendFile('FrenchChars.txt', c, (err) => {  
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            console.log('saved!');
        });
     }

    //  console.log(total.length);
    //  csvdata.write('./stoppedString.csv', arr1, {header: 'Text'});
    // console.log(newString);
    // console.log(newString.length);
});