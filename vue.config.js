const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pwa: {
    themeColor: '#4D8FBA'
  }
});
