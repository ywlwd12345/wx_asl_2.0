import {
    request
} from "../untils/group";
//拼团模块接口  author ywl


/**
 * @desc 首页拼吧热卖商品
 * @url /app/groups/index
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getGroupIndex(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/index"
    });
}



/**
 * @desc 拼吧商品详情
 * @url /app/groups/goods/info
 * @method POST
 * @param {string}
 * @author ywl
 */
export function getGroupGoodsInfo(data) {
    return request({
        method: "POST",
        data,
        url: "/app/groups/goods/info"
    });
}


/**
 * @desc 直接参团生成订单
 * @url /app/groups/order/commit
 * @method POST
 * @param {string}
 * @author ywl
 */
export function directParticipationOrder(data) {
    return request({
        method: "POST",
        data,
        url: "/app/groups/order/commit"
    });
}


/**
 * @desc 获取地址列表
 * @url /app/address
 * @method POST
 * @param {string}
 * @author ywl
 */
export function getAddressListData(data) {
    return request({
        method: "GET",
        data,
        url: "/app/address"
    });
}


/**
 * @desc 拼团商品时间段
 * @url /app/groups/time/list
 * @method POST
 * @param {string}
 * @author ywl
 */
export function getGroupPeriod(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/time/list"
    });
}



/**
 * @desc 拼团商品按时间段分类显示
 * @url /app/groups/goods/list
 * @method POST
 * @param {string}
 * @author ywl
 */
export function getClassificationData(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/goods/list"
    });
}


/**
 * @desc 拼团订单信息
 * @url /app/groups/order/list
 * @method POST
 * @param {string}
 * @author ywl
 */
export function getGroupOrder(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/order/list"
    });
}


/**
 * @desc 拼团订单详情信息
 * @url /app/groups/order/list
 * @method POST
 * @param {string}
 * @author ywl
 */
export function getGroupItemOrderInfo(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/order/list"
    });
}


/**
 * @desc 获取拼吧信息
 * @url /app/member/info
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getWalletInfo(data) {
    return request({
        method: "GET",
        data,
        url: "/app/member/info"
    });
}


/**
 * @desc 拼团余额充值
 * @url /app/groups/recharge/add
 * @method GET
 * @param {string}
 * @author ywl
 */
export function chargeMoney(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/recharge/add"
    });
}


/**
 * @desc 拼团余额充值列表
 * @url /app/groups/recharge/list
 * @method GET
 * @param {string}
 * @author ywl
 */
export function chargeMoneyList(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/recharge/list"
    });
}


/**
 * @desc 缓存openId
 * @url /app/applet/openid
 * @method GET
 * @param {string}
 * @author ywl
 */
export function caOpenid(data) {
    return request({
        method: "POST",
        data,
        url: "/app/applet/openid"
    });
}

/**
 * @desc  提现
 * @url /app/groups/withdraw/add
 * @method GET
 * @param {string}
 * @author ywl
 */
export function withdraw(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/withdraw/add"
    });
}


/**
 * @desc  提现列表
 * @url /app/groups/withdraw/list
 * @method GET
 * @param {string}
 * @author ywl
 */
export function withdrawList(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/withdraw/list"
    });
}




/**
 * @desc  拼团小程序支付
 * @url /applet/groups/order/pay
 * @method GET
 * @param {string}
 * @author ywl
 */
export function groupWxPay(data) {
    return request({
        method: "POST",
        data,
        url: "/applet/groups/order/pay"
    });
}



/**
 * @desc  获取拼团小程序支付信息
 * @url  /app/groups/orderpay/info 
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getGroupWxPayInfo(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/orderpay/info"
    });
}


/**
 * @desc  asl币兑换拼吧币
 * @url  /app/exchange/groupfee
 * @method GET
 * @param {string}
 * @author ywl
 */
export function aslExchangePb(data) {
    return request({
        method: "POST",
        data,
        url: "/app/exchange/groupfee"
    });
}



/**
 * @desc  订单操作(展示详情,删除,取消订单,退货)
 * @url /app/groups/order/view
 * @method GET
 * @param {string}
 * @author ywl
 */
export function groupOrderOperating(data) {
    return request({
        method: "POST",
        data,
        url: "/app/groups/order/view"
    });
}



/**
 * @desc 拼团拼吧币记录列表
 * @url /app/groups/fee/list
 * @method GET
 * @param {string}
 * @author ywl
 */
export function recordingPb(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/fee/list"
    });
}


/**
 * @desc 拼团低消记录列表
 * @url /app/groups/lowfee/list
 * @method GET
 * @param {string}
 * @author ywl
 */
export function recordingDx(data) {
    return request({
        method: "GET",
        data,
        url: "/app/groups/lowfee/list"
    });
}


/**
 * @desc  获取物流信息
 * @url  /app/exp/search
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



//非拼吧部分


/**
 * @desc  获取直播间列表
 * @url  /app/live/room/list
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getLiveRoom(data) {
    return request({
        method: "GET",
        data,
        url: "/app/live/room/list"
    });
}



/**
 * @desc 订单角标，快递轮播信息api
 * @url  app/order/else/info
 * @method GET
 * @param {string}
 * @author ywl
 */
export function getFootmarkInfo(data) {
    return request({
        method: "GET",
        data,
        url: "/app/order/else/info"
    });
}

/**
 * @desc 查询用户某月哪些天有浏览记录api
 * @url  app/search/browsing
 * @method GET
 * @param { year、month}
 * @author ywl
 */
export function getBrowsingHistoryData(data) {
    return request({
        method: "GET",
        data,
        url: "/app/search/browsing"
    });
}



/**
 * @desc 获取用户具体某天浏览记录商品api
 * @url /app/browsing/history
 * @method GET
 * @param { begin、end}
 * @author ywl
 */
export function browsingGoodsData(data) {
    return request({
        method: "GET",
        data,
        url: "/app/browsing/history"
    });
}



/**
 * @desc 删除用户具体某天浏览记录api
 * @url /app/browsing/history
 * @method GET
 * @param { begin、end}
 * @author ywl
 */
export function delBrowsingGoods(data) {
    return request({
        method: "DELETE",
        data,
        url: "/app/browsing/history"
    });
}


/**
 * @desc 获取分享二维码
 * @url /app/QRcode
 * @method GET
 * @param {}
 * @author ywl
 */
export function getErWeiData(data) {
    return request({
        method: "GET",
        data,
        url: "/app/QRcode"
    });
}




/**
 * @desc 实名认证
 * @url /app/authentication
 * @method GET
 * @param {}
 * @author ywl
 */
export function authentication(data) {
    return request({
        method: "POST",
        data,
        url: "/app/authentication"
    });
}



/**
 * @desc 获取学习中心分类api
 * @url /app/study/category
 * @method GET
 * @param {}
 * @author ywl
 */
export function studayCategory(data) {
    return request({
        method: "GET",
        data,
        url: "/app/study/category"
    });
}



/**
 * @desc 根据分类获取学习中心列表
 * @url /app/study/list
 * @method GET
 * @param {}
 * @author ywl
 */
export function studayList(data) {
    return request({
        method: "GET",
        data,
        url: "/app/study/list"
    });
}


/**
 * @desc get请求，code=403或者0，判断用户是否未登录
 * @url /app/islogin
 * @method GET
 * @param {}
 * @author ywl
 */
export function isLogin(data) {
    return request({
        method: "GET",
        data,
        url: "/app/islogin"
    });
}



/**
 * @desc 商品页评论信息api
 * @url /app/goods/page/comments
 * @method GET
 * @param { goodsId }
 * @author ywl
 */
export function comments(data) {
    return request({
        method: "GET",
        data,
        url: "/app/goods/page/comments"
    });
}



/**
 * @desc 发表评论api
 * @url app/goods/comment
 * @method GET
 * @param {   }
 * @author ywl
 */
export function newComments(data) {
    return request({
        method: "POST",
        data,
        url: "/app/goods/comment"
    });
}


/**
 * @desc  商品评论上传图片视频
 * @url  app/oss/upload
 * @method GET
 * @param {   }
 * @author ywl
 */
export function commentsImg(data) {
    return request({
        method: "POST",
        data,
        url: "/app/oss/upload"
    });
}



/**
 * @desc  获取商品评论api	
 * @url  /app/goods/comment
 * @method GET
 * @param {   }
 * @author ywl
 */
export function goodsComments(data) {
    return request({
        method: "GET",
        data,
        url: "/app/goods/comment"
    });
}



/**
 * @desc  拼吧确认收货api
 * @url  app/groups/order/receive
 * @method GET
 * @param {   }
 * @author ywl
 */
export function confirmReceipt(data) {
    return request({
        method: "POST",
        data,
        url: "/app/groups/order/receive"
    });
}



/**
 * @desc  获取待评价商品信息api
 * @url  /app/tobecomment/goods
 * @method GET
 * @param {   }
 * @author ywl
 */
export function commentGoodsList(data) {
    return request({
        method: "GET",
        data,
        url: "/app/tobecomment/goods"
    });
}