import VuexGenerator from '@ctsj/vuexgenerator';

console.log('VuexGeneratorPlugin.js');

/**
 * serviceRegister
 */
function serviceRegister() {
  const requireComponent = require.context('../../service', false, /.*\.(js)$/);

  const services = {};
  requireComponent.keys().forEach((fileName) => {
    const serviceKey = fileName.substring(2, fileName.length - 3);
    services[serviceKey] = requireComponent(fileName);
  });

  return services;
}

/**
 * modelRegister
 */
function modelRegister() {
  const requireComponent = require.context('../modules', false, /.*\.(js)$/);

  const models = {};
  requireComponent.keys().forEach((fileName) => {
    const modelKey = fileName.substring(2, fileName.length - 3);
    models[modelKey] = requireComponent(fileName);
  });

  return models;
}

// 创建VuexGeneratorPlugin插件
export default VuexGenerator(serviceRegister(), modelRegister());
