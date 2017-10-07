const fs = require('fs');
var csvdata = require('csvdata');
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
    var gram = nGram(1)(total);
    console.log(gram);
    csvdata.write('./gram1.csv', gram, {header: '1gram'});
    var twoGram = nGram.bigram(total);
    csvdata.write('./gram2.csv', twoGram, {header: '2gram'}); // ['n-', '-g', 'gr', 'ra', 'am'] 
    var threeGram = nGram.trigram(total);
    csvdata.write('./gram3.csv', threeGram, {header: '3gram'});
    // console.log(nGram.trigram(total));
});

lr.on('end', function () {

});