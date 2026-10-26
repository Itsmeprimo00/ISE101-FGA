module.exports = function (babelApiFGA) {
  babelApiFGA.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
