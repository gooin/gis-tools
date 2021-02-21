let geojson_encode = require('./src/geojson-encode')
let sort_migration_json = require('./src/sort-migration-json')

/**
 * 用过的的处理GIS数据的函数
 * 函数调用的入口，根据需要注释启用对应的代码块即可
 * 运行： node index.js
 */

/**
 * 压缩 geojson 为 pbf
 */
// const geojsonFile = './example-datas/point_100_for_heatmap_geojson.json';
// geojson_encode(geojsonFile,'./example-datas/point_100_for_heatmap_geojson.pbf')


/**
 * 分类json数据为geojson
 */
const jsonFile = './example-datas/jiangsu_migration.json';
const savedFile = './example-datas/jiangsu_migration_sorted_by_city_geojson.json';
sort_migration_json(jsonFile, savedFile);