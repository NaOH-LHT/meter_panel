<template>
    <view class="main_box">
        <template v-if="isConnect">
            <view class="title_box">消息窗口（{{form.ip}}:{{form.port}}）</view>
            <scroll-view scroll-y class="msg_box">
                <template v-for="(v,k) in msgList">
                    <view class="msg_line">{{ v.type==1?'收':'发' }}：（{{ v.time }}）<br />{{ v.msg }}</view>
                </template>
            </scroll-view>
            <view class="line_box">
                <input class="value" type="text" v-model="form.sendMsg" />
                <button class="btn" @click="sendMsg">发送字符串消息</button>
            </view>
            <view class="line_box">
                <input class="value" type="text" v-model="form.sendHexMsg" />
                <button class="btn" @click="sendHexMsg">发送Hex字符串消息</button>
            </view>
            <view class="connect_btn">
                <button class="btn" type="warn" @click="closeConnect">断开连接</button>
            </view>
        </template>

        <template v-else>
            <view class="title_box">连接配置</view>
            <view class="line_box">
                <view class="name">IP：</view>
                <input class="value" type="text" v-model="form.ip" />
            </view>
            <view class="line_box">
                <view class="name">端口：</view>
                <input class="value" type="text" v-model="form.port" />
            </view>
            <view class="connect_btn">
                <button class="btn" type="primary" @click="openConnect">开始连接</button>
            </view>
        </template>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    ip: '192.168.0.100',
                    port: '8888',
                    sendMsg: '',
                    sendHexMsg: '',
                },

                msgList: [],

                isConnect: false,
            }
        },
        onReady() {
            // 初始话TCP客户端
            this.moeTcpClient = uni.requireNativePlugin("moe-tcp-client");
            this.moeTcpClient.onReceive(this.tcpOnReceive)
            this.moeTcpClient.onDisconnect(this.tcpOnDisconnect)
        },
        methods: {
            openConnect() {
                this.msgList = [];
                uni.showLoading({
                    title: '连接中'
                });
                this.moeTcpClient.connect({
                    ip: this.form.ip,
                    port: this.form.port
                }, this.tcpOnConnect);
            },
            closeConnect() {
                this.moeTcpClient.disconnect();
                this.isConnect = false;
            },
            sendMsg() {
                if (this.form.sendMsg.trim() == "") {
                    uni.showToast({
                        title: "内容不能为空",
                        duration: 2000
                    });
                    return;
                }
                this.moeTcpClient.sendStr({
                    message: this.form.sendMsg
                });
                this.pushMsgList(this.form.sendMsg, 0);
            },
            sendHexMsg() {
                if (this.form.sendMsg.trim() == "") {
                    uni.showToast({
                        title: "内容不能为空",
                        duration: 2000
                    });
                    return;
                }
                this.moeTcpClient.sendHexStr({
                    message: this.form.sendHexMsg
                });
                this.pushMsgList(this.form.sendHexMsg, 0);
            },
            pushMsgList(msg, type) {
                this.msgList.unshift({
                    time: new Date().getTime(),
                    type,
                    msg
                });
            },

            /** 连接成功 */
            tcpOnConnect(res) {
                console.log('tcpOnConnect', res)
                this.pushMsgList(res, 1);
                uni.hideLoading();

                res = JSON.parse(res);
                if (res.code == 1) {
                    this.isConnect = true;
                    uni.showToast({
                        title: res.msg,
                        duration: 2000
                    });
                } else {
                    uni.showToast({
                        title: res.msg,
                        icon: 'fail',
                        duration: 2000
                    });
                }
            },
            tcpOnReceive(res) {
                console.log('tcpOnReceive', res)
                this.pushMsgList(res, 1);
            },
            tcpOnDisconnect() {
                console.log('tcpOnDisconnect')

            },
        }
    }
</script>

<style lang="scss">
    .main_box {
        font-size: 28rpx;

        .title_box {
            font-size: 32rpx;
            font-weight: bold;
            padding: 10rpx;
        }

        .line_box {
            display: flex;
            align-items: center;
            padding: 10rpx 20rpx;

            .name {
                font-weight: bold;
                min-width: 120rpx;
            }

            .value {
                width: 100%;
                padding: 8rpx 16rpx;
                border: 1px solid #AAAAAA;
            }

            .btn {
                flex-shrink: 0;
                width: 300rpx;
                margin-left: 20rpx;
                font-size: 28rpx;
            }
        }

        .connect_btn {
            padding: 20rpx;

            .btn {
                height: 88rpx;
                line-height: 88rpx;
            }
        }

        .msg_box {
            box-sizing: border-box;
            width: 90vw;
            height: 50vh;
            border: 1px solid #AAAAAA;
            border-radius: 10rpx;
            margin: 0 auto;

            .msg_line {
                box-sizing: border-box;
                padding: 10rpx 20rpx;
                word-wrap: break-word;

                +.msg_line {
                    border-top: 1px solid #AAAAAA;
                }
            }
        }
    }
</style>