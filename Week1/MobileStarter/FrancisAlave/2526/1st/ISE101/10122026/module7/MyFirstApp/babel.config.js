module.exports = function (apiFGA) {
  apiFGA.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
