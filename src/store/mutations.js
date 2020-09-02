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
    }


}