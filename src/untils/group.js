import {
    Config
} from './env.js'
import cml from 'chameleon-api'

let requestData = function(param = {}, url) {
    let token
    return cml.getStorage('token').then((value) => {
        // 处理获取到的键值
        token = value
            // console.log(token,8888777555)
        switch (param.method) {
            case 'GET':
                return cml.get({
                    url: url,
                    data: param.data,
                    header: {
                        'content-type': 'application/json',
                        'From': 'App',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization': 'bearer ' + token
                    }
                })
                break;
            case 'POST':
                return cml.post({
                    url: url,
                    data: param.data,
                    header: {
                        'content-type': 'application/json',
                        'From': 'App',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization': 'bearer ' + token

                    }
                })
                break;
            default:
                return cml.request({
                    url: url,
                    data: param.data,
                    method: param.method,
                    header: {
                        'content-type': 'application/json',
                        'From': 'App',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization': 'bearer ' + token
                    }
                })

        }
    })


}

class Base extends Config {
    constructor(baseUrl) {
        super(baseUrl)
    }


    request(param = {}) {
        param.method || (param.method = 'GET')
        param.url || (param.url = '')
        const url = this.baseUrl + param.url
        return requestData(param, url)

    }


}
let baseObj = new Base()
let request = baseObj.request.bind(baseObj)




export {
    request
}