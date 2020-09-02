// 设置静态资源的线上路径
const publicPath = 'w.aishenglian.com';
// 设置api请求前缀
const apiPrefix = 'w.aishenglian.com';

const path = require('path')





cml.config.merge({
    templateLang: "cml",
    templateType: "html",
    platforms: ["wx"],
    buildInfo: {
        wxAppId: 'wxf7806bb101980be8'
    },

    globalStyleConfig: {
        //globalCssPath 该路径下的样式对非 weex 端生效；
        globalCssPath: path.join(__dirname, 'src/assets/global.config.less')
    },
    wx: {
        dev: {
            apiPrefix,
            publicPath: '/'
        },
        build: {
            apiPrefix,
            publicPath: '/'

        },

    },
    web: {
        dev: {
            analysis: false,
            console: false,
            publicPath: "w.aishenglian.com",
        },
        build: {
            analysis: false,
            publicPath: "w.aishenglian.com",
            apiPrefix

        }
    },
    weex: {
        dev: {},
        build: {
            publicPath: `${publicPath}/weex/`,
            apiPrefix
        },
        custom: {
            publicPath: `${publicPath}/wx/`,
            apiPrefix
        }
    }
})


// 解决支持scss，希望可以帮助到正在坑中或即将入坑的同学
// cml.utils.plugin('webpackConfig', function({
//     type,
//     media,
//     webpackConfig
// }, cb) {
//     const findRule = test => {
//         let rules
//         webpackConfig.module.rules.some((item, index) => {
//             if (new RegExp(item.test).test(test)) {
//                 rules = {
//                     rule: item,
//                     index
//                 }
//                 return true
//             }
//         })
//         return rules
//     }

//     // 支持scss
//     const cmlFile = findRule('.cml')
//     if (cmlFile) {
//         cmlFile.rule.use = cmlFile.rule.use.map(use => {
//             use.options.loaders.scss = JSON.parse(JSON.stringify(use.options.loaders.less)).map(item => {
//                 if (item.loader === 'less-loader') item.loader = 'sass-loader'
//                 return item
//             })
//             return use
//         })
//         webpackConfig.module.rules[cmlFile.index] = cmlFile.rule
//     }

//     cb({
//         type,
//         media,
//         webpackConfig
//     })
// })