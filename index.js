let geojson_encode = require('./src/geojson-encode')
let sort_migration_json = require('./src/sort-migration-json')

// // 压缩 geojson 为 pbf
// 运行： node index.js
// const geojsonFile = './example-datas/point_100_for_heatmap_geojson.json';
// geojson_encode(geojsonFile,'./example-datas/point_100_for_heatmap_geojson.pbf')


// 抽取数据
const jsonFile = './example-datas/jiangsu_migration.json';
const savedFile = './example-datas/jiangsu_migration_sorted_by_city_geojson.json';
sort_migration_json(jsonFile, savedFile);