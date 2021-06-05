const path = require('path');
const externals = require('../../config/externals');

module.exports = {
  getConfig({ webpackConfig }) {
    webpackConfig.resolve.modules.unshift(path.join(__dirname, 'node_modules'));
    webpackConfig.externals = {
      ...externals,
      '@baifendian/adherev-util-resource': 'commonjs2 @baifendian/adherev-util-resource',
      'algebra.js': 'commonjs2 algebra.js',
      ol: 'commonjs2 ol',
      'ol/proj.js': 'commonjs2 ol/proj.js',
      'ol/layer': 'commonjs2 ol/layer',
      'ol/source': 'commonjs2 ol/source',
      'ol/format/GeoJSON': 'commonjs2 ol/format/GeoJSON',
      'ol/style.js': 'commonjs2 ol/style.js',
      'ol/layer/Tile': 'commonjs2 ol/layer/Tile',
      'ol/source.js': 'commonjs2 ol/source.js',
      'ol/Map': 'commonjs2 ol/Map',
      'ol/geom/Circle': 'commonjs2 ol/geom/Circle',
      'ol/geom/Polygon': 'commonjs2 ol/geom/Polygon',
      'ol/geom/LinearRing': 'commonjs2 ol/geom/LinearRing',
      'ol/geom': 'commonjs2 ol/geom',
      'ol/View': 'commonjs2 ol/View',
      'ol/Feature.js': 'commonjs2 ol/Feature.js',
      'ol/style/Text': 'commonjs2 ol/style/Text',
      'ol/Overlay.js': 'commonjs2 ol/Overlay.js',
      'ol/extent.js': 'commonjs2 ol/extent.js',
      'ol/coordinate': 'commonjs2 ol/coordinate',
      'ol/layer.js': 'commonjs2 ol/layer.js',
      'ol/interaction/Draw.js': 'commonjs2 ol/interaction/Draw.js',
      'ol/interaction/Modify': 'commonjs2 ol/interaction/Modify',
      'ol/control.js': 'commonjs2 ol/control.js',
      'ol/control/Zoom.js': 'commonjs2 ol/control/Zoom.js',
      'ol/control/MousePosition.js': 'commonjs2 ol/control/MousePosition.js',
      'ol/control/ScaleLine.js': 'commonjs2 ol/control/ScaleLine.js',
      uuid: 'commonjs2 uuid',
    };
  },
};
