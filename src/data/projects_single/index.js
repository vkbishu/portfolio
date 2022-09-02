//extract all project files inside modules
const requireModule = require.context("./");
const modules = {};
requireModule.keys().forEach((fileName) => {
  const moduleName = fileName.replace(/(\.\/|\.vue|\.js)/g, "");
  if (moduleName && moduleName !== "index") {
    modules[moduleName] = requireModule(fileName).default;
  }
});
export default modules;
