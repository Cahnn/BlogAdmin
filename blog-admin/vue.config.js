'use strict'

module.exports = {
    devServer: {
        proxy: {
            ['/api']: {   // 拦截转到3000端口
                target: `http://localhost:3000`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + '/api']: ''   // 改写3000接口的前缀
                }
            }
        }
    }
}
