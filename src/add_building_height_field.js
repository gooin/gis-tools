const { readJSONfromFile, writeJSONtoFile } = require('./util')
const turf = require('@turf/turf')


const add_building_height_field = (jsonFile, saveFile, field) => {
    const json = readJSONfromFile(jsonFile);
    json.features.forEach(f => {
        f.properties.Height = Math.floor(Math.random() * 200)
    });
    writeJSONtoFile(json, saveFile);
}


module.exports = add_building_height_field;