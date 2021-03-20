const geojsonBounds = require('geojson-bounds');
const gb = require('geojson-bounds');
const { readJSONfromFile } = require('./util')




const geojson_bounds = (jsonFile)=>{
    const json = readJSONfromFile(jsonFile);
    // console.log('json :>> ', json);
    // return gb.envelope(json)
    // return gb.xMin(json)
    return gb.yMax(json)
    // return gb.yMin(json)
}

module.exports = geojson_bounds;