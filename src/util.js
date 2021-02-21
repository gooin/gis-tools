const fs = require('fs');

/**
 * 从本地读取json文件
 * @param {string} jsonFile json文件路径
 */
const readJSONfromFile = (jsonFile) => {
    return JSON.parse(fs.readFileSync(jsonFile));
}

/**
 * 将json数据写入到文件中
 * @param {json} jsonData json内容
 * @param {string} targetPath 写入的json路径
 */
const writeJSONtoFile = (jsonData,targetPath) =>{
    fs.writeFileSync(targetPath,JSON.stringify(jsonData));
}

module.exports = {
    readJSONfromFile,
    writeJSONtoFile
}
