// geojson压缩为geobuf
var Pbf = require('pbf');
var geobuf = require('geobuf');
const fs = require('fs');
const fse = require('fs-extra')
const path = require('path')
const { readJSONfromFile, writeJSONtoFile } = require('./util')


// let json = geobuf.decode(new Pbf(fs.readFileSync(file)))

const geojson_encode = (jsonFile, targetFile) => {
    console.time('transform cost')
    var buffer = geobuf.encode(readJSONfromFile(jsonFile), new Pbf());
    // console.log('buffer :>> ', buffer);
    fs.writeFileSync(targetFile, buffer);
    console.timeEnd('transform cost')
    console.log(`write to '${targetFile}' success`)

}

/**
 * 将文件夹内的json文件转换为dbf
 * @param {string} dir json文件夹路径
 * @param {string} saveDir 结果文件夹路径
 */
const geojson_encode_dir = async (dir, saveDir) => {
    let files = await fse.readdir(dir);
    let target = [];
    console.time("convert to dbf total time");
    for (let f of files) {
        let lowerCase = f.toLowerCase();
        if (lowerCase.endsWith('.json')) {
            const jsonFile = path.join(dir, f)
            const dbfFile = jsonFile.split('.')[0] + '.pbf'
            geojson_encode(jsonFile,dbfFile);
        }
    }
    console.timeEnd("convert to dbf total time");
}


module.exports = {
    geojson_encode,
    geojson_encode_dir
};
