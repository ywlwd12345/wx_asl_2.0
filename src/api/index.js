import {
    request
} from "../untils/base";

/**
 * @desc 首页展示产品
 * @url /shop/index/getactivity
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getActivityIndex(data) {
    return request({
        method: "GET",
        data,
        url: "/app/index/goods"
    });
}

export function getUserOpenid(data) {
    return request({
        method: "GET",
        data,
        url: "/marketing/app/getulist"
    });
}
//获取搜索记录
export function SearchRecords(data) {
    return request({
        method: "GET",
        data,
        url: "/app/search/records"
    });
}
//删除搜索记录
export function deleteRecords(data) {
    return request({
        method: "DELETE",
        data,
        url: "/app/search/records"
    });
}
//添加收藏商品
export function CollectiongGoods(data) {
    return request({
        method: "POST",
        data,
        url: "/app/goods/collection"
    });
}
//取消收藏商品
export function deletesGoods(data) {
    return request({
        method: "DELETE",
        data,
        url: "/app/goods/collection"
    });
}
//获取收藏列表
export function get_Goods(data) {
    return request({
        method: "GET",
        data,
        url: "/app/goods/collection"
    });
}
//新登录
export function getUserLogin(data) {
    return request({
        method: "POST",
        data,
        url: "/app/login"
    });
}

//获取openid
export function getOpenid(data) {
    return request({
        method: "POST",
        data,
        url: "/app/applet/openid"
    });
}

//把openid传给后端
export function sendOpenid(data) {
    return request({
        method: "POST",
        data,
        url: "/app/update/openid"
    });
}

//解密手机号码
export function getnumber(data) {
    return request({
        method: "POST",
        data,
        url: "/app/wx/info"
    });
}

//提交一键注册
export function wxregistration(data) {
    return request({
        method: "POST",
        data,
        url: "/app/wx/register"
    });
}

//下单
export function appletPay(data) {
    return request({
        method: "POST",
        data,
        url: "/applet/order/pay"
    });
}

//拼吧特惠区支付
export function preferential(data) {
    return request({
        method: "POST",
        data,
        url: "/applet/low/order/pay"
    });
}


export function CacheUserCookie(data) {
    return request({
        method: "POST",
        data,
        url: "/marketing/app/idlogin"
    });
}

/**
 * @desc banner图
 * @url /marketing/api/getbanner
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getIndexBanner(data) {
    return request({
        method: "GET",
        data,
        url: "/app/rotation"
    });
}




/**
 * @desc 首页专区产品
 * @url /shop/index/getindexgoods
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getIndexgoods(data) {
    return request({
        method: "GET",
        data,
        url: "/app/goods"
    });
}


/**
 * @desc 首页全部产品列表
 * @url /shop/index
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getIndexRecommendgoods(data) {
    return request({
        method: "GET",
        data,
        url: "/app/goods/all"
    });
}


/**
 * @desc 搜索商品
 * @url /shop/index
 * @method GET
 * @param {string}
 * @author ywl
 */
export function sousuogoods(data) {
    return request({
        method: "GET",
        data,
        url: "/app/search/goods"
    });
}

/**
 * @desc 分类下得商品
 * @url /shop/index
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getclassificationgoods(data) {
    return request({
        method: "GET",
        data,
        url: "/app/category/goods"
    });
}


/**
 * @desc 首页热销产品列表
 * @url /marketing/api/gethotgoods
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getIndexHotgoods(data) {
    return request({
        method: "GET",
        data,
        url: "/marketing/api/gethotgoods"
    });
}


/**
 * @desc 获取商品详情
 * @url /shop/index/goodsinfo
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getGoodDetails(data) {
    return request({
        method: "GET",
        data,
        url: "/app/goodsinfo"
    });
}


/**
 * @desc 获取产品二级分类  或者获取产品获取一级类目
 * @url /shop/index/getcate
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getGoodCate(data) {
    return request({
        method: "GET",
        data,
        url: "/app/category"
    });
}


/**
 * @desc 获取文章列表
 * @url /cms/api/getnoticelist
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getNoticeList(data) {
    return request({
        method: "GET",
        data,
        url: "/app/study"
    });
}


/**
 * @desc 获取文章详情
 * @url /cms/api/notice
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getNoticeContent(data) {
    return request({
        method: "GET",
        data,
        url: "/app/study/detail"
    });
}


/**
 * @desc 我的订单列表 
 * @url /shop/order/index
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getOrderLists(data) {
    return request({
        method: "GET",
        data,
        url: "/app/order/info"
    });
}



/**
 * @desc 用户订单详情接口
 * @url /shop/order/orderinfo
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getOrderData(data) {
    return request({
        method: "GET",
        data,
        url: "/app/order/view"
    });
}


/**
 * @desc 获取付款信息
 * @url /shop/pay/o2pay
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getOrderNumber(data) {
    return request({
        method: "GET",
        data,
        url: "/app/orderpay/info"
    });
}

/**
 * @desc 再来一单
 * @url /shop/pay/o2pay
 * @method GET
 * @param {string}
 * @author ywl
 */
export function another(data) {
    return request({
        method: "POST",
        data,
        url: "/app/another/order"
    });
}


/**
 * @desc 修改订单状态
 * @url /shop/pay/o2pay
 * @method GET
 * @param {string}
 * @author ywl
 */
export function modifyState(data) {
    return request({
        method: "PUT",
        data,
        url: "/app/order/view"
    });
}


/**
 * @desc 获取支付时订单信息接口
 * @url /shop/pay/getosn.html
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getOrderInfo(data) {
    return request({
        method: "GET",
        data,
        url: "/shop/pay/getosn.html"
    });
}

/**
 * @desc 支付接口 小程序专用
 * @url /shop/pay/index
 * @method GET
 * @param {string}
 * @author ywl
 */
export function payMoney(data) {
    return request({
        method: "GET",
        data,
        url: "/shop/pay/checkout"
    });
}

// 取消支付
export function cancellationpay(data) {
    return request({
        method: "POST",
        data,
        url: "/app/order/cancel/pay"
    });
}

/**
 * @desc 取消订单接口
 * @url /shop/order/cancelorder
 * @method GET
 * @param {string}
 * @author ywl
 */
export function cancelOrderDetails(data) {
    return request({
        method: "GET",
        data,
        url: "/shop/order/cancelorder"
    });
}


/**
 * @desc ASL明细
 * @url /marketing/member/feelog
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getAslData(data) {
    return request({
        method: "GET",
        data,
        url: "/app/feelogs"
    });
}


/**
 * @desc 获取商品规格的接口
 * @url/shop/index/getstyle
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getStyle(data) {
    return request({
        method: "GET",
        data,
        url: "/shop/index/getstyle"
    });
}


/**
 * @desc 直接购买生成订单信息接口
 * @url/shop/pay/g2o.html
 * @method GET
 * @param {string}
 * @author ywl
 */
export function createOrderNumber(data) {
    return request({
        method: "POST",
        data,
        url: "/app/onegoods/commit"
    });
}


/**
 * @desc 获取用户默认地址
 * @url/shop/pay/g2o.html
 * @method GET
 * @param {string}
 * @author ywl
 */

export function getDefaultAddress(data) {
    return request({
        method: "GET",
        data,
        url: "/app/default/address"
    });
}

/**
 * @desc 添加到购物车
 * @url /shop/index/addcart
 * @method GET
 * @param {string}
 * @author ywl
 */

export function addCartData(data) {
    return request({
        method: "Post",
        data,
        url: "/app/carts"
    });
}


/**
 * @desc 删除订单
 * @url /shop/index/addcart
 * @method GET
 * @param {string}
 * @author ywl
 */

export function deleteOrder(data) {
    return request({
        method: "DELETE",
        data,
        url: "/app/order/view"
    });
}


/**
 * @desc 购物车列表
 * @url /shop/cart/index
 * @method GET
 * @param {string}
 * @author ywl
 */

export function getCartLIstData(data) {
    return request({
        method: "GET",
        data,
        url: "/app/carts"
    });
}




/**
 * @desc 更改购物车单个产品数据
 * @url /shop/cart/edit.html
 * @method GET
 * @param {string}
 * @author ywl
 */

export function sureCartSingleData(data) {
    return request({
        method: "GET",
        data,
        url: "/shop/cart/edit.html"
    });
}


/**
 * @desc  确认购物车数据
 * @url /shop/pay/c2o
 * @method GET
 * @param {string}
 * @author ywl
 */

export function sureCartData(data) {
    return request({
        method: "POST",
        data,
        url: "/app/orders/commit"
    });
}

/**
 * @desc  全选购物车
 * @url /shop/pay/c2o
 * @method GET
 * @param {string}
 * @author ywl
 */

export function AllCartData(data) {
    return request({
        method: "PUT",
        data,
        url: "/app/carts/selection"
    });
}

/**
 * @desc  修改购物车
 * @url /shop/pay/c2o
 * @method GET
 * @param {string}
 * @author ywl
 */

export function modifyCart(data) {
    return request({
        method: "PUT",
        data,
        url: "/app/carts"
    });
}


/**
 * @desc  确认购物车
 * @url /shop/cart/confimorder
 * @method GET
 * @param {string}
 * @author ywl
 */

export function sureCar(data) {
    return request({
        method: "GET",
        data,
        url: "/shop/cart/confimorder"
    });
}

/**
 * @desc 用户消息列表
 * @url /marketing/member/getms
 * @method GET
 * @param {string}
 * @author ywl
 */

export function getUserNews(data) {
    return request({
        method: "GET",
        data,
        url: "/app/message"
    });
}
/**
 * @desc 获取用户是否有未读消息
 * @url /marketing/member/getms
 * @method GET
 * @param {string}
 * @author ywl
 */

export function getUnreadNews(data) {
    return request({
        method: "GET",
        data,
        url: "/app/unread/message"
    });
}


/**
 * @desc 用户消息操作-已读标记
 * @url /marketing/member/msgstatus
 * @method GET
 * @param {string}
 * @author ywl
 */

export function yetNews(data) {
    return request({
        method: "GET",
        data,
        url: "/marketing/member/msgstatus"
    });
}


/**
 * @desc 用户消息操作-删除
 * @url /marketing/member/delmsg
 * @method GET
 * @param {string}
 * @author ywl
 */

export function delNews(data) {
    return request({
        method: "DELETE",
        data,
        url: "/app/message"
    });
}

/**
 * @desc 用户消息操作-删除
 * @url /marketing/member/delmsg
 * @method GET
 * @param {string}
 * @author ywl
 */

export function readsNews(data) {
    return request({
        method: "PUT",
        data,
        url: "/app/message"
    });
}



/**
 * @desc 填写用户信息 
 * @url /marketing/member/edit_u
 * @method GET
 * @param {string}
 * @author ywl
 */

export function changeUserInfo(data) {
    return request({
        method: "POST",
        data,
        url: "/app/fill/info"
    });
}


/**
 * @desc 发送短信
 * @url /marketing/app/sendsms
 * @method GET
 * @param {string}
 * @author ywl
 */
//新验证码
export function passNumber(data) {
    return request({
        method: "Get",
        data,
        url: "/app/send/smscode"
    });
}


/**
 * @desc  更换手机号
 * @url /marketing/member/editmobile
 * @method GET
 * @param {string}
 * @author ywl
 */

export function sureChangePhone(data) {
    return request({
        method: "POST",
        data,
        url: "/app/modify/mobile"
    });
}



/**
 * @desc  修改支付密码
 * @url /app/modify/paypass
 * @method GET
 * @param {string}
 * @author ywl
 */

export function changePay(data) {
    return request({
        method: "POST",
        data,
        url: "/app/modify/paypass"
    });
}


/**
 * @desc  修改登录密码
 * @url /marketing/member/editpassword
 * @method GET
 * @param {string}
 * @author ywl
 */

export function changeLogin(data) {
    return request({
        method: "POST",
        data,
        url: "/app/modify/password"
    });
}

/**
 * @desc  修改个人信息
 * @url /marketing/member/editpassword
 * @method GET
 * @param {string}
 * @author ywl
 */

export function modify_info(data) {
    return request({
        method: "POST",
        data,
        url: "/app/apply/modify/info"
    });
}

/**
 * @desc  获取个人市场信息
 * @url /marketing/member/editpassword
 * @method GET
 * @param {string}
 * @author ywl
 */

export function personalMarket(data) {
    return request({
        method: "GET",
        data,
        url: "/app/sub/view"
    });
}

/**
 * @desc  获取下级
 * @url /marketing/member/editpassword
 * @method GET
 * @param {string}
 * @author ywl
 */

export function getSubordinates(data) {
    return request({
        method: "GET",
        data,
        url: "/app/all/subs"
    });
}

/**
 * @desc 修改备注
 * @url /marketing/member/editpassword
 * @method GET
 * @param {string}
 * @author ywl
 */

export function Modifynotes(data) {
    return request({
        method: "POSt",
        data,
        url: "/app/remark/sub"
    });
}



/**
 * @desc  创客用户数据
 * @url /marketing/member/ckzx
 * @method GET
 * @param {string}
 * @author ywl
 */

export function getMakerUserInfo(data) {
    return request({
        method: "GET",
        data,
        url: "/marketing/member/ckzx"
    });
}



/**
 * @desc  积分日志
 * @url /marketing/member/scorelog
 * @method GET
 * @param {string}
 * @author ywl
 */

export function getScoreData(data) {
    return request({
        method: "GET",
        data,
        url: "/app/feelogs"
    });
}





/**
 * @desc  分享收益
 * @url /marketing/member/moneylog
 * @method GET
 * @param {string}
 * @author ywl
 */

export function getShareCoin(data) {
    return request({
        method: "GET",
        data,
        url: "/marketing/member/moneylog"
    });
}





/**
 * @desc  提现账户信息接口
 * @url /marketing/member/cash
 * @method GET
 * @param {string}
 * @author ywl
 */

export function getDepositCoin(data) {
    return request({
        method: "GET",
        data,
        url: "/app/cash/info"
    });
}




/**
 * @desc  提现申请接口
 * @url /marketing/member/cash
 * @method POST
 * @param {string}
 * @author ywl
 */

export function postCoin(data) {
    return request({
        method: "POST",
        data,
        url: "/app/apply/cash"
    });
}


/**
 * @desc 提现日志
 * @url /marketing/member/cash_list
 * @method GET
 * @param {string}
 * @author ywl
 */

export function putLog(data) {
    return request({
        method: "GET",
        data,
        url: "/app/casjh/logs"
    });
}


/**
 * @desc 转账
 * @url /marketing/member/p2p
 * @method POST
 * @param {string}
 * @author ywl
 */

export function putPay(data) {
    return request({
        method: "POST",
        data,
        url: "/app/transfer/account"
    });
}



/**
 * @desc 通过用户名获取用户信息
 * @url marketing/member/getuserinfobyname
 * @method POST
 * @param {string}
 * @author ywl
 */

export function getUserInfoByName(data) {
    return request({
        method: "POST",
        data,
        url: "/marketing/member/getuserinfobyname"
    });
}



/**
 * @desc 升级申请
 * @url /marketing/member/shengji
 * @method GET
 * @param {string}
 * @author ywl
 */

export function goUpdate(data) {
    return request({
        method: "POST",
        data,
        url: "/app/apply/upgrade"
    });
}

/**
 * @desc 上传头像
 * @url /marketing/member/shengji
 * @method GET
 * @param {string}
 * @author ywl
 */

export function uploadAvatar(data) {
    return request({
        method: "POST",
        data,
        url: "/app/upload/avatar"
    });
}


/**
 * @desc 首页公告
 * @url /marketing/api/announcement
 * @method POST
 * @param {string}
 * @author ywl
 */

export function getTel(data) {
    return request({
        method: "GET",
        data,
        url: "/app/notice"
    });
}


/**
 * @desc 获取用户地址列表
 * @url / marketing / member / addrlist
 * @method GET
 * @param {string}
 * @author ywl
 */

export function getAddrlist(data) {
    return request({
        method: "GET",
        data,
        url: "/app/address"
    });
}


/**
 * @desc 新增用户地址
 * @url / marketing / member / addaddress
 * @method GET
 * @param {string}
 * @author ywl
 */

export function addAddaddress(data) {
    return request({
        method: "POST",
        data,
        url: "/app/address"
    });
}

/**
 * @desc 获得某个地址信息
 * @url / marketing / member / getaddrinfo
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getOneAddrInfo(data) {
    return request({
        method: "GET",
        data,
        url: "/app/address/detail"
    });
}


/**
 * @desc 编辑某个地址
 * @url / marketing / member / editaddress
 * @method GET
 * @param {string}
 * @author ywl
 */
export function editAddressInfo(data) {
    return request({
        method: "Put",
        data,
        url: "/app/address"
    });
}


/**
 * @desc 删除收货地址接口
 * @url /marketing/member/deladdr?id=976
 * @method GET
 * @param {string}
 * @author ywl
 */
export function deleteAddr(data) {
    return request({
        method: "DELETE",
        data,
        url: "/app/address"
    });
}


/**
 * @desc 设置默认地址
 * @url /marketing/member/setaddr
 * @method GET
 * @param {string}
 * @author ywl
 */
export function setDefaultAddr(data) {
    return request({
        method: "POST",
        data,
        url: "/app/address/default"
    });
}


/**
 * @desc 安全登出接口
 * @url /marketing/member/logout
 * @method GET
 * @param {string}
 * @author ywl
 */
export function quitWX(data) {
    return request({
        method: "GET",
        data,
        url: "/app/logout"
    });
}


/**
 * @desc 用户签到接口
 * @url / marketing / member / sign
 * @method GET
 * @param {string}
 * @author ywl
 */
export function sign(data) {
    return request({
        method: "GET",
        data,
        url: "/app/sign"
    });
}



/**
 * @desc  热线电话号码
 * @url /marketing/api/gethotline
 * @method GET
 * @param {string}
 * @author ywl
 */
export function phoneNumber(data) {
    return request({
        method: "GET",
        data,
        url: "/marketing/api/gethotline"
    });
}


/**
 * @desc  用户收货操作
 * @url /shop/order/accept
 * @method GET
 * @param {string}
 * @author ywl
 */
export function sureGetGoods(data) {
    return request({
        method: "GET",
        data,
        url: "/shop/order/accept"
    });
}



/**
 * @desc  获取物流信息
 * @url /marketing/api/getexpressinfo
 * @method GET
 * @param {string}
 * @author ywl
 */
export function transportInfo(data) {
    return request({
        method: "GET",
        data,
        url: "/app/exp/search"
    });
}


/**
 * @desc 通过推荐人ID注册
 * @url /marketing/index/reg
 * @method GET
 * @param {string}
 * @author ywl
 */
export function invitationToRegister(data) {
    return request({
        method: "POST",
        data,
        url: "/app/register"
    });
}


/**
 * @desc 通过id获取用户信息
 * @url /marketing/app/getuserinfo
 * @method GET
 * @param {string}
 * @author ywl
 */
export function userInfoToUid(data) {
    return request({
        method: "POST",
        data,
        url: "/app/member/info"
    });
}


/**
 * @desc 用户订单申请退货接口
 * @url /shop/order/sendback
 * @method GET
 * @param {string}
 * @author ywl
 */
export function returnsGoodsToOid(data) {
    return request({
        method: "GET",
        data,
        url: "/shop/order/sendback"
    });
}


/**
 * @desc 删除购物车单个产品
 * @url /shop/cart/del.html
 * @method GET
 * @param {string}
 * @author ywl
 */
export function deleteCart(data) {
    return request({
        method: "DELETE",
        data,
        url: "/app/carts"
    });
}


/**
 * @desc 忘记密码
 * @url / marketing / app / getPassword
 * @method GET
 * @param {string}
 * @author ywl
 */
export function lookUpPassword(data) {
    return request({
        method: "POST",
        data,
        url: "/app/forget/pass"
    });
}

/**
 * @desc 获取基础用户信息
 * @url /marketing/member/index
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getBaseUserInfo(data) {
    return request({
        method: "GET",
        data,
        url: "/app/member/info"
    });
}
/**
 * @desc 获取秒杀时间段
 * @url /marketing/member/index
 * @method GET
 * @param {string}
 * @author ywl
 */
export function secondkilltime(data) {
    return request({
        method: "GET",
        data,
        url: "/app/second/kill/time"
    });
}
/**
 * @desc 获取首页秒杀和品牌
 * @url /marketing/member/index
 * @method GET
 * @param {string}
 * @author ywl
 */
export function indexkill(data) {
    return request({
        method: "GET",
        data,
        url: "/app/index/info"
    });
}
/**
 * @desc 获取秒杀时间段产品
 * @url /marketing/member/index
 * @method GET
 * @param {string}
 * @author ywl
 */
export function secondkillproduct(data) {
    return request({
        method: "GET",
        data,
        url: "/app/second/kill/goods"
    });
}

/**
 * @desc 获取小程序分享的图文信息
 * @url / shop / index / minipic
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getShareInfo(data) {
    return request({
        method: "POST",
        data,
        url: "/shop/index/minipic"
    });
}