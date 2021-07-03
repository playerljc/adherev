const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    delete webpackConfig.module.rules[2].include;
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
    webpackConfig.externals = {
      ...externals.defaultExternals,
      ...externals.externals([
        '@baifendian/adherev-util-resource',
        'algebra.js',
        'ol',
        'ol/proj.js',
        'ol/layer',
        'ol/source',
        'ol/format/GeoJSON',
        'ol/style.js',
        'ol/layer/Tile',
        'ol/source.js',
        'ol/Map',
        'ol/geom/Circle',
        'ol/geom/Polygon',
        'ol/geom/LinearRing',
        'ol/geom',
        'ol/View',
        'ol/Feature.js',
        'ol/style/Text',
        'ol/Overlay.js',
        'ol/extent.js',
        'ol/coordinate',
        'ol/layer.js',
        'ol/interaction/Draw.js',
        'ol/interaction/Modify',
        'ol/control.js',
        'ol/control/Zoom.js',
        'ol/control/MousePosition.js',
        'ol/control/ScaleLine.js',
        'uuid',
      ]),
    };
  },
};
