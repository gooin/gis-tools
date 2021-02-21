
const { readJSONfromFile } = require('./util')
const _ = require('lodash');
const d3 = require('d3-scale');

const generete_arc = (jsonFile, targetFile) => {
    const json = readJSONfromFile(jsonFile)
    // console.log('json :>> ', json);
    return calculateArcs(json.features)
}

const inFlowColors = [
    [255, 255, 204],
    [199, 233, 180],
    [127, 205, 187],
    [65, 182, 196],
    [29, 145, 192],
    [34, 94, 168],
    [12, 44, 132]
];

const outFlowColors = [
    [255, 255, 178],
    [254, 217, 118],
    [254, 178, 76],
    [253, 141, 60],
    [252, 78, 42],
    [227, 26, 28],
    [177, 0, 38]
];
function calculateArcs(data, selectedCounty) {
    if (!data || !data.length) {
        return null;
    }
    if (!selectedCounty) {
        selectedCounty = data.find(f => f.properties.name === 'Los Angeles, CA');
    }
    const { flows, centroid } = selectedCounty.properties;

    const arcs = Object.keys(flows).map(toId => {
        const f = data[toId];
        return {
            source: centroid,
            target: f.properties.centroid,
            value: flows[toId]
        };
    });

    const scale = d3.scaleQuantile()
        .domain(arcs.map(a => Math.abs(a.value)))
        .range(inFlowColors.map((c, i) => i));

    arcs.forEach(a => {
        a.gain = Math.sign(a.value);
        a.quantile = scale(Math.abs(a.value));
    });

    return arcs;
}

module.exports = generete_arc;