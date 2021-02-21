const fs = require('fs');
var _ = require('lodash');

const sort_migration_json = (jsonFile, targetFile) => {
    let json = JSON.parse(fs.readFileSync(jsonFile))
    // console.log('json', json);

    // 按城市来拆分
    let category = []
    _.forEach(json, val => {
        // console.log('val :>> ', val);
        // 取前两个字相同
        let { name, from, to } = val
        const coordinates = [to.split(',')[0], to.split(',')[1]]

        let city = name.substring(0, 2);
        // 处理三个字的城市
        if (city === '连云') {
            city = name.substring(0, 3);
        }

        const index = category.findIndex(values => values.city === city)
        if (index !== -1) {
            // 已有，添加点即可
            category[index].geojson.features.push(
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": coordinates
                    },
                    "properties": {
                        "name": name
                    }
                }
            )
        } else {
            // 每个相同的城市，点放到geojson中去
            let dataStructure = {
                city: city,
                from: from,
                geojson: {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": coordinates
                            },
                            "properties": {
                                "name": name
                            }
                        }
                    ]
                }
            }

            category.push(dataStructure)
        }
    })
    // debugger;
    console.log('category :>> ', category);
    // 写入文件
    fs.writeFileSync(targetFile,JSON.stringify(category));
}

module.exports = sort_migration_json;
