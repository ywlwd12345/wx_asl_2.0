export default {
    changeStatus(state) {
        state.flag = false
    },
    changeCart(state, bool) {
        state.cartFlag = bool
    },
    changeSign(state, str) {
        state.isSign = str
    },
    changeCancelLogin(state, bool) {
        console.log(bool, 456789)
        state.isCancelLogin = bool
    },
    changeCancel(state, bool) {
        console.log(bool, 456789)
        state.Cancels = bool
    },
    changeaddress(state, bool) {
        console.log(bool, 456789)
        state.address = bool
    },
    changeNewaddress(state, bool) {
        console.log(bool, 456789)
        state.newaddress = bool
    },

    changeIndexAnmationFlag(state, bool) {
        state.indexAnmationFlag = bool
    },

    changeSingNum(state, num) {
        state.singNum = num
    },
    //变更全局id
    changeGlobalId(state, obj) {

        state.globalId[obj.key] = obj.value
    },
    //导航栏高度
    navOpacity(state, value) {
        state.navOpacity = value
    },
    //详情页面距离顶部的高度
    detailTop(state, value) {
        state.detailTop = value
    },
    //胶囊按钮的信息
    menuButton(state, obj) {
        state.menuButton = obj
    },
    //用户个人信息
    personUserInfo(state, obj) {
        state.personUserInfo = obj
    }




}