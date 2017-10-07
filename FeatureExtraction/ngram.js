const fs = require('fs');
var writeFile = require('write');
var createFile = require('create-file');
let writeStream = fs.createWriteStream('secret.txt');
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
    nGram.bigram('n-gram'); // ['n-', '-g', 'gr', 'ra', 'am'] 
    nGram(2)('n-gram'); // ['n-', '-g', 'gr', 'ra', 'am'] 
    
    nGram.trigram('n-gram'); // ['n-g', '-gr', 'gra', 'ram'] 
    
    nGram(6)('n-gram'); // ['n-gram'] 
    nGram(7)('n-gram');

});

lr.on('end', function () {

});