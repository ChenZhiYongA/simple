module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'src',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true, // 设置这个参数可以避免跨域
        pathRewrite: {
          "^/api": "/mock"
        }
      }
    }
  }
}
