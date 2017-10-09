const fs = require('fs');
var unique = require('array-unique');
var csvdata = require('csvdata');
var writeFile = require('write');
var createFile = require('create-file');
var unique = require('array-unique');
let writeStream = fs.createWriteStream('secret.txt');
var HashMap = require('hashmap');
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('testfinal.txt');

var LineByLineReader2 = require('line-by-line'),
    lr2 = new LineByLineReader2('French_v1.txt');
var LineByLineReader3 = require('line-by-line'),
    lr3 = new LineByLineReader2('German_v1.txt');
var LineByLineReader4 = require('line-by-line'),
    lr4 = new LineByLineReader2('Polish_v1.txt');
var LineByLineReader5 = require('line-by-line'),
    lr5 = new LineByLineReader2('Slovak_v1.txt');
var LineByLineReader6 = require('line-by-line'),
    lr6 = new LineByLineReader2('Spanish_v1.txt');
var centroid=[];
var centroid3=[];
var centroid4=[];
var centroid5=[];
var centroid6=[];
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
    // console.log(charArr);
});

lr.on('end', function () {
	// All lines are read, file is closed now.
    // console.log(total);
     finalChars = unique(charArr);

    //  console.log(finalChars.length);
    for(var i=0;i<finalChars.length;i++){
         var c = finalChars[i] +'\n';
        fs.appendFile('totalChars.txt', c, (err) => {  
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            // console.log('saved!');
        });
     }
    var LineByLineReader2 = require('line-by-line'),
    lr2 = new LineByLineReader2('French_v1.txt');
     var lineNo=0;
     lr2.on('line', function (line) {
        // 'line' contains the current line without the trailing newline character.
        total = line.toLowerCase();
        console.log(total);
        console.log(lineNo);
        var cent=[];
        for(var i =0;i<finalChars.length;i++){
            var count=0;
            for(var j=0;j<total.length;j++){
                if(total[j]==finalChars[i]){
                    count++;
                }
            }
            cent[i]=count;
        }
        centroid[lineNo]=cent;
        lineNo++;
    });
    lr2.on('end', function () {
        var totalChar = new Array(centroid[0].length).fill(0);;
	// All lines are read, file is closed now.
        for(var q=0;q<centroid.length;q++){
            for(var w=0;w<centroid[0].length;w++){
                totalChar[w]=totalChar[w]+parseInt(centroid[q][w]);
            }
        }
        for(var e=0;e<centroid.length;e++){
            for(var f=0;f<centroid[0].length;f++){
                centroid[e][f]= Math.log(((parseInt(centroid[e][f])+0.0001)/parseInt(totalChar[f])*10));
            }
        }
        console.log("tyoyoyoyoyoyoyo",totalChar);
        console.log(lineNo);
        for(var i=0;i<lineNo-1;i++){
            var c = centroid[i] +'\n';
            fs.appendFile('frenchCentroid.csv', c, (err) => {  
                // throws an error, you could also catch it here
                if (err) throw err;

                // success case, the file was saved
                // console.log('saved!');
            });
        }
        
    });
    // var lineNo=0;
    //  lr3.on('line', function (line) {
    //     // 'line' contains the current line without the trailing newline character.
        
    //     total = line.toLowerCase();
    //     var cent=[];
    //     for(var i =0;i<finalChars.length;i++){
    //         var count=0;
    //         for(var j=0;j<total.length;j++){
    //             if(total[j]==finalChars[i]){
    //                 count++;
    //             }
    //         }
    //         cent[i]=count;
    //     }
    //     centroid3[lineNo]=cent;
    //     lineNo++;
    // });
    // lr3.on('end', function () {
	// // All lines are read, file is closed now.

    //     for(var i=0;i<lineNo-1;i++){
    //         var c = centroid3[i] +'\n';
    //         fs.appendFile('germanCentroid.txt', c, (err) => {  
    //             // throws an error, you could also catch it here
    //             if (err) throw err;

    //             // success case, the file was saved
    //             console.log('saved!');
    //         });
    //  }
    // });
    // var lineNo=0;
    //  lr4.on('line', function (line) {
    //     // 'line' contains the current line without the trailing newline character.
    //     total = line.toLowerCase();
    //     var cent=[];
    //     for(var i =0;i<finalChars.length;i++){
    //         var count=0;
    //         for(var j=0;j<total.length;j++){
    //             if(total[j]==finalChars[i]){
    //                 count++;
    //             }
    //         }
    //         cent[i]=count;
    //     }
    //     centroid4[lineNo]=cent;
    //     lineNo++;
    // });
    // lr4.on('end', function () {
	// // All lines are read, file is closed now.

    //     for(var i=0;i<lineNo-1;i++){
    //         var c = centroid4[i] +'\n';
    //         fs.appendFile('polishCentroid.txt', c, (err) => {  
    //             // throws an error, you could also catch it here
    //             if (err) throw err;

    //             // success case, the file was saved
    //             console.log('saved!');
    //         });
    //  }
    // });
    // var lineNo=0;
    //  lr5.on('line', function (line) {
    //     // 'line' contains the current line without the trailing newline character.
    //     total = line.toLowerCase();
    //     var cent=[];
    //     for(var i =0;i<finalChars.length;i++){
    //         var count=0;
    //         for(var j=0;j<total.length;j++){
    //             if(total[j]==finalChars[i]){
    //                 count++;
    //             }
    //         }
    //         cent[i]=count;
    //     }
    //     centroid5[lineNo]=cent;
    //     lineNo++;
    // });
    // lr5.on('end', function () {
	// // All lines are read, file is closed now.

    //     for(var i=0;i<lineNo-1;i++){
    //         var c = centroid5[i] +'\n';
    //         fs.appendFile('slovakCentroid.txt', c, (err) => {  
    //             // throws an error, you could also catch it here
    //             if (err) throw err;

    //             // success case, the file was saved
    //             console.log('saved!');
    //         });
    //  }
    // });
    // var lineNo=0;
    //  lr6.on('line', function (line) {
    //     // 'line' contains the current line without the trailing newline character.
    //     total = line.toLowerCase();
    //     var cent=[];
    //     for(var i =0;i<finalChars.length;i++){
    //         var count=0;
    //         for(var j=0;j<total.length;j++){
    //             if(total[j]==finalChars[i]){
    //                 count++;
    //             }
    //         }
    //         cent[i]=count;
    //     }
    //     centroid6[lineNo]=cent;
    //     lineNo++;
    // });
    // lr6.on('end', function () {
	// // All lines are read, file is closed now.

    //     for(var i=0;i<lineNo-1;i++){
    //         var c = centroid6[i] +'\n';
    //         fs.appendFile('spanishCentroid.txt', c, (err) => {  
    //             // throws an error, you could also catch it here
    //             if (err) throw err;

    //             // success case, the file was saved
    //             console.log('saved!');
    //         });
    //  }
    // });

    //  console.log(total.length);
    //  csvdata.write('./stoppedString.csv', arr1, {header: 'Text'});
    // console.log(newString);
    // console.log(newString.length);
});