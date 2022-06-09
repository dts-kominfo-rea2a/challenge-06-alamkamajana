// TODO: import module bila dibutuhkan di sini
var fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let arrJSON = [];
  fs.readFile(file1, function(err, data) {
    let dataJSON = JSON.parse(data);
    textSplited = dataJSON.message.split(' ')
    // console.log(textSplited)
    arrJSON.push(textSplited[1])
    // fnCallback(arrJSON)
    fs.readFile(file2, function(err, data) {
      let dataJSON2 = JSON.parse(data);
      textSplited2 = dataJSON2[0].message.split(' ')
      arrJSON.push(textSplited2[1])
      // textSplited = dataJSON.message.split(' ')
      // console.log(dataJSON2[0])
      // arrJSON.push(textSplited[1])
      // fnCallback(arrJSON)

      fs.readFile(file3, function(err, data) {
        let dataJSON3 = JSON.parse(data);
        textSplited3 = dataJSON3[0]["data"]["message"].split(' ')
        arrJSON.push(textSplited3[1])
        // console.log(dataJSON3[0]["data"]["message"])
        fnCallback(err,arrJSON)
      });
      // console.log(fnCallback(arrJSON))
    });
  });
  
  
  
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
