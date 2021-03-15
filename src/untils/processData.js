//处理首页专区商品标题
import store from "../store";
import cml from "chameleon-api";
export function dealStoreTitleName(str, count = 15) {
    if (str && str.length > count) {
        return str.slice(0, count) + "...";
    } else {
        return str;
    }
}
//处理详情页字符串数据
export function dealDetailsStrData(str) {
    //先暂时这样  后面会用正则匹配
    let result = [];
    let arrStr = str.split("</p>");
    arrStr.map(d => {
        d = d.split(" ")[1];
        if (d) {
            d = store.state.domainUrl + d.substring(4).slice(1, -1);
            result.push(d);
        }
        return d;
    });
    return result;
}

//把对象的vlaue变成数组

export function objChangeArray(obj) {
    let arr = [];
    for (let key in obj) {
        arr.push(obj[key]);
    }

    return arr;
}

// 把尺寸相关数组变成合适的对象数组
export function arrayChangeObj(arr) {
    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj.color = arr[i];
        obj.flag = false;
        arr1.push(obj);
    }
    return arr1;
}

//处理单个步进器
export function getSingleTotal(num, price) {
    let unit = parseInt(num);
    let newPrice = Number(price);
    return unit * newPrice;
}

//处理购物车总价
// export function totalCart(arr) {
//     let total = 0;
//     arr.map(d => {
//         if (d.flag) {
//             let price = Number(d.price);
//             let num = Number(d.num);
//             total += price * num;
//         }
//         return d;
//     });
//     return total;
// }
//处理通告数据

export function dealTel(str) {
    let arr = str.split("</p>");
    let arr1 = arr.map(d => {
        d = d.substring(3);
        return d;
    });
    arr1.length = arr1.length - 1;
    return arr1;
}

//处理详情和文章内容的图片问题

export function dealImg(strData) {
    let str = "/uploads";
    strData = strData.replace(/\<img class/gi, "<img data-class");
    strData = strData.replace(/http:\/\/w.net3.cc/gi, "");
    let newStr = store.state.domainUrl + str;
    let pattern3 = /\/uploads/gi;
    let oneStr = strData.replace(pattern3, newStr);
    let twoStr = "";

    return (twoStr = oneStr.replace(/\<img/gi, '<img class="rich-img" '));
}

//处理文章视频格式
export function dealVideo(arr) {
    let arr1 = arr.map(d => {
        d = d.substring(0, d.length - 1);
        return d;
    });

    let obj = {};
    obj.videoImg = arr1[0];
    obj.poster = arr1[1];
    return obj;
}

//处理详情属性数据格式
let random = function(n) {
    // 生成6位长度的字符串
    return (~~(Math.random() * (1 << 30))).toString(36); // "<<"操作相当于乘上2的n次方，"~~"相当于parseInt
};

export function dealDetailsStyle(arr1, arr2) {
    let arr = [];
    let arr2Obj = {};
    let arr2Array = [];
    let obj = {};
    arr1.map((item, index) => {
        obj.style = item;
        if (arr2[index] && arr2[index].length) {
            arr2[index].map(d => {
                let objCenter = {};
                objCenter.size = d;
                objCenter.bool = false;
                //生成随机6位长度的字符串id
                objCenter.id = random();

                //浅拷贝
                arr2Obj = {
                    ...objCenter
                };
                arr2Array.push(arr2Obj);
                return d;
            });
            obj.size = [...arr2Array];
            arr2Array = [];
        } else {
            obj.size = [];
        }
        //深拷贝对象
        arr.push(JSON.parse(JSON.stringify(obj)));
        obj = {};
        return item;
    });

    return arr;
}

//缓存当前的时间戳

export function cachTimestampNow() {
    let timestamp = new Date().getTime();
    let time = new Date();
    let hour = time.getHours();
    let num = (24 - parseInt(hour)) * 60 * 60 * 1000;
    timestamp = parseInt(timestamp) + num
    cml.getStorage("userId").then(value => {
        if (value) {
            cml.setStorage("timestamp" + value, timestamp);
        }
    });
}

//设置更改签到状态时间
export function changeSign() {
    let time = new Date();
    // let hour = time.getHours();
    // let num = (24 - parseInt(hour)) * 60 * 60 * 1000;
    cml.getStorage("userId").then(value => {
        let res = value
        cml.getStorage("timestamp" + value).then(value => {
            // 处理获取到的键值
            if (!value) {
                cml.setStorage("isSign" + res, "今日签到");
                return;
            }
            if (parseInt(value) < time.getTime()) {
                cml.setStorage("isSign" + res, "今日签到");
            }
        });
    });
}

//全局提示

export function tip(str, time = 1000) {
    cml.showToast({
        message: str,
        duration: time
    })


}