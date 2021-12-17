const fs = require("fs");
const csv = require("csvtojson");
const { Parser } = require('json2csv')

(async () => {
    const cars = await csv().fromFile("excel.csv")

    console.log(cars);
})();

