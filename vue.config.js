const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
var socket = new WebSocket("wss://x8v9vch4-8080.usw3.devtunnels.ms/");