const fs = require('fs');


const sort_migration_json = (jsonFile, targetFile) => {
    let json = JSON.parse(fs.readFileSync(jsonFile))
    console.log('json', json);
    // 拆分为流出的和流入的

}

module.exports = sort_migration_json;
