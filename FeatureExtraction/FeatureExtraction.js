var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('French_v1.txt');
var sw = require('stopword');
    var total ="";

lr.on('error', function (err) {
	// 'err' contains error object

});

lr.on('line', function (line) {
	// 'line' contains the current line without the trailing newline character.
    total = total + " " + line.toLowerCase();
    //console.log(total);
});

lr.on('end', function () {
	// All lines are read, file is closed now.
    console.log(total);
    console.log(total.length);
    const oldString = total.split(' ');
    // sw.sv contains swedish stopwords
    const newString = sw.removeStopwords(oldString, sw.fr);
    console.log(newString);
    console.log(newString.length)
});