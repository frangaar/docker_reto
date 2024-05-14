const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  vue: {
    port: 8081,
    disableHostCheck: true
  },
  transpileDependencies: true
})
