let geojson_encode = require('./src/geojson-encode')
let sort_migration_json = require('./src/sort-migration-json')
let generete_arc = require('./src/generate_arc')
let suncalc = require('./src/suncalc');
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
// const jsonFile = './example-datas/jiangsu_migration.json';
// const savedFile = './example-datas/jiangsu_migration_sorted_by_city_geojson.json';
// sort_migration_json(jsonFile, savedFile);


/**
 * 创建arc所需的数据
 */
// const jsonFile = './example-datas/deckgl_example_arc.json';
// const arc = generete_arc(jsonFile)
// console.log('arc :>> ', arc);


/**
 * 阳光时间计算
 */

// 
let times = suncalc.getTimes(new Date(), 32.05, 118.78);
/**
{
  solarNoon: 2021-03-03T04:18:21.246Z,
  nadir: 2021-03-02T16:18:21.246Z,
  sunrise: 2021-03-02T22:31:44.704Z,
  sunset: 2021-03-03T10:04:57.788Z,
  sunriseEnd: 2021-03-02T22:34:17.030Z,
  sunsetStart: 2021-03-03T10:02:25.463Z,
  dawn: 2021-03-02T22:07:13.380Z,
  dusk: 2021-03-03T10:29:29.112Z,
  nauticalDawn: 2021-03-02T21:38:52.477Z,
  nauticalDusk: 2021-03-03T10:57:50.015Z,
  nightEnd: 2021-03-02T21:10:32.837Z,
  night: 2021-03-03T11:26:09.655Z,
  goldenHourEnd: 2021-03-02T23:04:28.651Z,
  goldenHour: 2021-03-03T09:32:13.841Z
}
 */
console.log('times :>> ', times);

