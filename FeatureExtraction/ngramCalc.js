const fs = require('fs');
var nGram = require('n-gram');
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('French_v1.txt');
var total ="";

lr.on('error', function (err) {
	// 'err' contains error object

});

lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
    total = line.toLowerCase();
    console.log(nGram(1)(total));
    console.log(nGram.bigram(total)); // ['n-', '-g', 'gr', 'ra', 'am'] 
    console.log(nGram.trigram(total));
});

lr.on('end', function () {

});