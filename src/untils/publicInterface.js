//这里写一些原生平台的接口 
import cml from 'chameleon-api';

import {
    getUserOpenid,
    CacheUserCookie,
    getUserLogin,
    sendOpenid
} from '../api/index.js'

import {
    caOpenid
} from '../api/grouping.js'

import store from '../store'


//测试登陆  https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code

let ceShiLogin = function(code) {
    console.log(code)
    const APPID = 'wxf7806bb101980be8'
    const SECRET = 'dea0b4ed95adb893e0c62aee379949de'
    cml.get({
        url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + code + '&grant_type=authorization_code'
    }).then(res => {
        console.log(res, '用户标识')


    }, err => {

    })

}


let getUseCode = function() {
    cml.getStorage('infodata').then((value) => {
        if (value == '' || value == undefined || value == null) {
            console.log("没有这个账号缓存")
        } else {
            let userinfos
            userinfos = value
            console.log("缓存", userinfos)
            getUserLogin({
                uName: userinfos.uname,
                passWord: userinfos.passWord
            }).then(res => {
                if (res.code) {
                    console.log("新" + res)
                    cml.setStorage('token', res.token)
                    cml.setStorage('mobile', res.mobile)
                    cml.setStorage('uname', userinfos.uname)
                    store.commit('changeStatus')
                        //登录成功更改登录按钮状态
                    store.commit('changeCancelLogin', false)
                } else {
                    cml.showToast({
                        message: res.msg,
                        duration: 2000
                    })
                }
            })
        }
    })

}






let cachCookie = function(code) {
    ceShiLogin(code)

}


let cachOpenid = function() {
    if (process.env.platform === 'wx') {
        wx.login({
            success(res) {
                if (res.code) {
                    //发起网络请求
                    caOpenid({
                        code: res.code
                    }).then(res => {

                        console.log(res, 'openId')

                        if (res.code) {
                            cml.setStorage('openid', res.openId) //缓存用户 openid
                            sendOpenid({
                                openId: res.openId
                            }).then(res => {
                                if (res.code) {
                                    console.log("上传", res)
                                } else {
                                    console.log("上传失败", res)
                                }
                            })

                        }

                    }).catch(err => {})

                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })

    }



}


let checkLogin = function() {
    getUseCode()
        // cachOpenid()
}





export {
    checkLogin,
    cachOpenid
} //导出改文件的变量列表