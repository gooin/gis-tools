const { readJSONfromFile,writeJSONtoFile } = require('./util')
const turf = require('@turf/turf')
// console.log('turf :>> ', turf);

const get_geojson_pac =  (jsonfile,saveJsonFile)=>{
    let result = {}
    let districtRoots = [];
    const json =  readJSONfromFile(jsonfile);
    json.features.map(f=>{
        const {PAC,名称:name} = f.properties
        districtRoots.push(String(PAC))
        result[PAC]={
            id:String(PAC),
            name:name,
            level:2,
            center:turf.centerOfMass(f).geometry.coordinates,
            scale: 1155581.108577,
            subDistricts:[]
        }
    })
    console.log('districtRoots :>> ', districtRoots);
    console.log('result :>> ', result);
    writeJSONtoFile(result,saveJsonFile);
}

module.exports = get_geojson_pac;