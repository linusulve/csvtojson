const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv");
const FileSystem = require("fs");

CSVToJSON().fromFile("./source.csv").then(source => {
  console.log(source);
  source.push({
    "album": "combatrock",
    "year": "1980",
    "US_peak_chart_post": "1992",

  });
});
