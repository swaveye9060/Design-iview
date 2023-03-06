const {
  defineConfig
} = require('@vue/cli-service')

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production' ?
  '/iview-admin/' :
  '/'

module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static',
  publicPath: BASE_URL,
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  // },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    port: 9060,
    // host: '0.0.0.0',
    host: 'localhost',
    //配置多个跨域
    // proxy: {
    //   "/api": {
    //     target: "http://197.0.0.1:8088",
    //     changeOrigin: true,
    //     // pathRewrite: {
    //     //   "^/api": "/"
    //     // }
    //   },
    // }
  }
})