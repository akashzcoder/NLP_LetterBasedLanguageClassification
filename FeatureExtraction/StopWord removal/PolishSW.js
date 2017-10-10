const fs = require('fs');
var unique = require('array-unique');
var csvdata = require('csvdata');
var writeFile = require('write');
var createFile = require('create-file');
var unique = require('array-unique');
var HashMap = require('hashmap');
sw = require('stopword')
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('Polish_v1.txt');

lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
    total = line.toLowerCase();
    var oldString = total.split(' ');
    var newString = sw.removeStopwords(oldString,sw.pl) + '\n';
    fs.appendFile('PoishSW.txt', newString, (err) => {  
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        // console.log('saved!');
    });

    // console.log(charArr);
});

lr.on('end', function () {


});
