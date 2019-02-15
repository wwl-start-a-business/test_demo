let path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    // 路径别名设置
    config.resolve.alias
      .set("@", resolve("src/assets"))
      .set("@views", resolve("src/views"))
      .set("@comp", resolve("src/components"));
  },
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 16,
            unitPrecision: 5, // 最小精度，小数点位数
            propList: ["*"], // !不匹配属性（这里是字体相关属性不转换）
            selectorBlackList: [],
            minPixelValue: 2 // 替换的最小像素值
          })
        ]
      },
      // css预设器配置项
      css: {
        localIdentName: "[name]-[hash]",
        camelCase: "only"
      }
    }
  },
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.essaybot.com/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
