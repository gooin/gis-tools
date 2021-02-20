// geojson压缩为geobuf
var Pbf = require('pbf');
var geobuf = require('geobuf');
const fs = require('fs');


// let json = geobuf.decode(new Pbf(fs.readFileSync(file)))

const geojsonEncodeToFile = (jsonFile: string, targetFile: string) => {
    var buffer = geobuf.encode(fs.readFileSync(jsonFile), new Pbf());
}


module.exports = geojsonEncodeToFile;
