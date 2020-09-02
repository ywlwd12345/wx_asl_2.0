function getImageInfo(url) {
    return new Promise((resolve, reject) => {
        wx.getImageInfo({
            src: url,
            success: resolve,
            fail: reject,
        })
    })
}


//算法  算出绘图宽度和高度的比列
function createRpx2px() {
    const {
        windowWidth
    } = wx.getSystemInfoSync()

    return function(rpx) {
        return windowWidth / 750 * rpx
    }
}

const rpx2px = createRpx2px()

function canvasToTempFilePath(option, context) {
    return new Promise((resolve, reject) => {
        wx.canvasToTempFilePath({
            ...option,
            success: resolve,
            fail: reject,
        }, context)
    })
}

function saveImageToPhotosAlbum(option) {
    return new Promise((resolve, reject) => {
        wx.saveImageToPhotosAlbum({
            ...option,
            success: resolve,
            fail: reject,
        })
    })
}


function dealStoreTitleName(str, count = 15) {
    if (str && str.length > count) {
        return str.slice(0, count) + "...";
    } else {
        return str;
    }
}

Component({
    properties: {
        visible: {
            type: Boolean,
            value: false,
            observer(visible) {
                if (visible && !this.beginDraw) {
                    this.draw()
                    this.beginDraw = true
                }
            }
        },
        userInfo: {
            type: Object,
            value: false
        }
    },

    data: {
        beginDraw: false,
        isDraw: false,
        canvasWidth: 843,
        canvasHeight: 1500,
        imageFile: '',
        responsiveScale: 1,
    },

    lifetimes: {
        ready() {
            const designWidth = 375
            const designHeight = 603 // 这是在顶部位置定义，底部无tabbar情况下的设计稿高度
                // 以iphone6为设计稿，计算相应的缩放比例
            const {
                windowWidth,
                windowHeight
            } = wx.getSystemInfoSync()

            const responsiveScale =
                windowHeight / ((windowWidth / designWidth) * designHeight)
            if (responsiveScale < 1) {
                this.setData({
                    responsiveScale,
                })
            }
        },
        attached() {

        }
    },

    methods: {
        handleClose() {
            this.triggerEvent('close')
        },
        handleSave() {
            const {
                imageFile
            } = this.data
            if (imageFile) {
                saveImageToPhotosAlbum({
                    filePath: imageFile,
                }).then(() => {
                    wx.showToast({
                        icon: 'none',
                        title: '分享图片已保存至相册',
                        duration: 2000,
                    })
                }).catch(err => {
                    console.log(err, 456789, '哈哈狗')

                    if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" ||
                        err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
                        wx.showModal({
                            title: '提示',
                            content: '需要您授权保存相册',
                            showCancel: false,
                            success: modalSuccess => {
                                wx.openSetting({
                                    success(settingdata) {
                                        if (settingdata.authSetting['scope.writePhotosAlbum']) {
                                            console.log('获取权限成功，再次点击图片保存到相册。')
                                        } else {
                                            console.log('获取权限失败，不给权限就无法保存')
                                        }
                                    }
                                })
                            }
                        })
                    }

                })
            }
        },
        draw() {
            wx.showLoading()
            const {
                userInfo,
                canvasWidth,
                canvasHeight
            } = this.data
            const {
                avatarUrl,
                nickName,
                obj
            } = userInfo
            // 解构相关数据

            // https://w.aishenglian.com/static/icon/small/fx.png

            console.log(avatarUrl, '头像地址')

            const shareImgUrl = 'https://w.aishenglian.com/static/icon/small/fx.png'
            const shareBtnUrl = 'https://w.aishenglian.com/static/icon/small/fx-bot.png'
            const shareImgPromise = getImageInfo(shareImgUrl)
            const shareBtnPromise = getImageInfo(shareBtnUrl)
            const avatarPromise = getImageInfo(avatarUrl)
            const erweimaPromise = getImageInfo(obj.erWeiMa)
            const backgroundPromise = getImageInfo(obj.thumb)
            Promise.all([avatarPromise, backgroundPromise, erweimaPromise, shareImgPromise, shareBtnPromise])
                .then(([avatar, background, erweima, shareTipImg, shareBtnImg]) => {
                    // console.log(shareTipImg, '哈哈猪美女')

                    
                    const ctx = wx.createCanvasContext('share', this)
                        // 填充canvas背景色 避免绘制出来的矩形是黑色透明的
                    ctx.fillStyle = "#FFF"
                    const canvasW = rpx2px(canvasWidth * 2)
                    const canvasH = rpx2px(canvasHeight * 2)
                    const cricle = rpx2px(150 * 2)
                    ctx.fillRect(0, 0, canvasW, canvasH)
                        // 绘制底部背景
                    ctx.drawImage(
                        shareBtnImg.path,
                        0,
                        canvasH - rpx2px(100 * 2),
                        canvasW,
                        rpx2px(100 * 2)
                    )

                    // 绘制背景
                    ctx.drawImage(
                        background.path,
                        rpx2px(35 * 2),
                        3 / 2 * cricle + rpx2px(30 * 2),
                        canvasW - rpx2px(70 * 2),
                        canvasH / 3 + rpx2px(120 * 2)
                    )

                    // 绘制圆形
                    ctx.save()
                    ctx.beginPath()
                    ctx.arc(cricle / 2 + rpx2px(10 * 2), cricle / 2 + rpx2px(10 * 2), cricle / 2, 0, Math.PI * 2, false)
                    ctx.clip();
                    // 避免头像黑边 在画一个圆
                    ctx.beginPath();
                    ctx.arc(0, 0, 0, 0, Math.PI * 2, false)
                        //绘制头像 
                    const radius = cricle
                    ctx.drawImage(
                        avatar.path,
                        rpx2px(10 * 2),
                        rpx2px(10 * 2),
                        radius,
                        radius,
                    )
                    ctx.restore()
                        // 绘制提示角标
                    ctx.drawImage(
                        shareTipImg.path,
                        rpx2px(20 * 2),
                        3 / 2 * cricle,
                        canvasW - rpx2px(40 * 2),
                        canvasH / 2 + rpx2px(70 * 2)
                    )

                    //绘制二维码 
                    const erweimaX = canvasW - (rpx2px(300 * 2))
                    ctx.drawImage(
                            erweima.path,
                            rpx2px(30 * 2),
                            3 / 2 * cricle + rpx2px(350 * 2) + canvasH / 3,
                            280,
                            280
                        )
                        // 绘制提示语 
                    const tip = "长按识别小程序码"
                    ctx.setFontSize(45)
                    ctx.setTextAlign('center')
                    ctx.setFillStyle('#000000')
                    ctx.fillText(
                        tip,
                        rpx2px(600 * 2),
                        3 / 2 * cricle + rpx2px(440 * 2) + canvasH / 3
                    )
                    ctx.stroke()

                    // 绘制提示语2
                    const tip2 = "超值好物买买买"
                    ctx.setFontSize(35)
                    ctx.setTextAlign('center')
                    ctx.setFillStyle('#bbbec4')
                    ctx.fillText(
                        tip2,
                        rpx2px(550 * 2),
                        3 / 2 * cricle + rpx2px(550 * 2) + canvasH / 3
                    )
                    ctx.stroke()

                    // 绘制商品价格
                    ctx.setFontSize(40)
                    ctx.setTextAlign('left')
                    ctx.setFillStyle('#ff0000')
                    ctx.fillText(
                        `${obj.price}￥`,
                        rpx2px(50 * 2),
                        canvasH / 3 + 3 / 2 * cricle + rpx2px(290 * 2)
                    )
                    ctx.stroke()
                        // 绘制推荐人
                    ctx.setFontSize(36)
                    ctx.setTextAlign('left')
                    ctx.setFillStyle('#80848f')
                    ctx.fillText(
                        nickName,
                        cricle + rpx2px(25 * 2),
                        cricle / 2 + rpx2px(10 * 2)
                    )
                    ctx.stroke()


                    // 绘制提示语
                    ctx.setFontSize(44)
                    ctx.setTextAlign('left')
                    ctx.setFillStyle('#000000')
                    ctx.fillText(
                        '发现一个好物，分享给你呀',
                        rpx2px(10 * 2),
                        cricle + rpx2px(60 * 2),
                    )
                    ctx.stroke()
                        // 绘制矩形
                    ctx.setFillStyle('#e9eaec')
                    ctx.fillRect(rpx2px(30 * 2), canvasH / 3 + 3 / 2 * cricle + rpx2px(160 * 2), canvasW - rpx2px(60 * 2), rpx2px(70 * 2))

                    // 绘制商品名字

                    ctx.setFontSize(40)
                    ctx.setTextAlign('left')
                    ctx.setFillStyle('#1c2438')
                    ctx.fillText(
                        dealStoreTitleName(obj.title),
                        rpx2px(50 * 2),
                        canvasH / 3 + 3 / 2 * cricle + rpx2px(215 * 2)
                    )
                    ctx.stroke()
                    ctx.draw(false, () => {
                        canvasToTempFilePath({
                            canvasId: 'share',
                        }, this).then(({
                            tempFilePath
                        }) => {
                            this.setData({
                                imageFile: tempFilePath
                            })
                            wx.hideLoading()
                        })
                    })

                    // wx.hideLoading()
                    this.setData({
                        isDraw: true
                    })
                })
                .catch(() => {
                    this.setData({
                        beginDraw: false
                    })
                    wx.hideLoading()
                })
        }
    }
})