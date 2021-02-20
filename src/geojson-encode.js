// geojson压缩为geobuf
var Pbf = require('pbf');
var geobuf = require('geobuf');
const fs = require('fs');


// let json = geobuf.decode(new Pbf(fs.readFileSync(file)))

const geojson_encode = (jsonFile, targetFile) => {
    console.time('transform cost')
    var buffer = geobuf.encode(fs.readFileSync(jsonFile), new Pbf());
    fs.writeFileSync(targetFile,buffer);
    console.timeEnd('transform cost')
    console.log(`write to '${targetFile}' success`)

}


module.exports = geojson_encode;
