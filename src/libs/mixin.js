// 混合文件

export default {
  computed: {
    // 获取静态文件中config.js中的值
    BaseUrl: () => $BaseUrl,
    SystemName: () => $SystemName
  }
}