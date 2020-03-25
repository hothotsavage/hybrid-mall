// vue.config.js
const path = require('path')

// 修改webpack配置
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      // 只会在 开发环境中生效，当我们使用 build 去打包一个项目的时候，那么这里的配置不会生效
      // return {
      //     resolve: {
      //         alias: {
      //             '@js': path.resolve(__dirname, './src/assets/js'),
      //             '@css': path.resolve(__dirname, './src/assets/css'),
      //             '@img': path.resolve(__dirname, './src/assets/imgs'),
      //             '@c': path.resolve(__dirname, './src/components'),
      //         }
      //     }
      // }

    }

    return {
      resolve: {
        alias: {
          // 定义别名
          // @js:根路径下的./src/assets/js目录
          '@js': path.resolve(__dirname, './src/assets/js'),
          '@css': path.resolve(__dirname, './src/assets/css'),
          '@img': path.resolve(__dirname, './src/assets/imgs'),
          '@c': path.resolve(__dirname, './src/components')
        }
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
