<template>
	<view>
		<uni-card>
			<button @click="start">打开 Wi-Fi 模块</button>
			<button @click="stop">关闭 Wi-Fi 模块</button>
			<button @click="getDetail">获取已连接的 Wi-Fi 信息</button>
			<button @click="getList">获取 Wi-Fi 列表</button>
			<button @click="connectTCP">TCP连接 </button>
			<button @click="TCPSend">TCPSend </button>
			<view class="" v-if="isConnect">
				<button @click="goDisplay">
					数据展示
				</button>
				<button @click="goInput">
					数据输入
				</button>
			</view>
		</uni-card>
	</view>
</template>
<script>
	import TCPSocket from '../../hooks/TCPSocket'
	export default {
		data() {
			return {
				isConnect: false,
				SocketTask:{}
			}
		},
		onLoad(){
			//获取到 Wi-Fi 列表数据事件的监听函数
			console.log("onload");
			this.connectTCP();	
		
			
			uni.onSocketMessage(function (res) {
			  console.log('收到服务器内容：' + res.data);
			});

			this.SocketTask.onError(err=>{
				console.log("TCPError: ",err)
			})
			this.SocketTask.onOpen(res=>{
				console.log("TCPOpen: ",res)
			})
			this.SocketTask.onClose(err=>{
				console.log("TCPClose: ",err)
			})
			
		},
		onUnload(){
			//移除获取到 Wi-Fi 列表数据事件的监听函数。
			uni.offGetWifiList()
			this.SocketTask.close();
		},
		methods: {
			start() { // 连接
				this.isConnect = true //连接成功后调用
				uni.startWifi({
					success(e) {
						console.log('startWifiSuccess', e)
					},
					fail(e) {
						console.log('startWifiFail', e)
					},
					complete(e) {
						console.log('startWifiComplete', e)
					}
				})
			},
			stop(){
				uni.stopWifi({
					success(e) {
						console.log('stopWifiSuccess', e)
					},
					fail(e) {
						console.log('stopWifiFail', e)
					},
					complete(e) {
						console.log('stopWifiComplete', e)
					}
				})
			},
			getDetail(){
				uni.getConnectedWifi({
					partialInfo:false,
					success(e) {
						console.log('getConnectedWifiSuccess', e)
					},
					fail(e) {
						console.log('getConnectedWifiFail', e)
					},
					complete(e) {
						console.log('getConnectedWifiComplete', e)
					}
				})
			},
			getList(){
				uni.getWifiList({
					success(e) {
						console.log("getWifiList_success",e)
					},
					fail(e) {
								console.log("getWifiList_fail",e)
					},
					complete(e) {
						console.log("getWifiList_complete",e)
					}
				})
			},
			goDisplay() {
				uni.navigateTo({
					url: '/pages/display/display'
				})
			},
			goInput() {
				uni.navigateTo({
					url: '/pages/input/input'
				})
			},
	
			TCPSend(){
				console.log(this.SocketTask);
				 uni.sendSocketMessage({
				      data: "asdlfkjalskdfjlakjsdfl"
				});
			},
			connectTCP(){
				this.SocketTask=uni.connectSocket({
					url: 'http://192.168.1.50:8086',
					header: {
						'content-type': 'application/json'
					},
					protocols: ['protocol1'],
					method: 'GET',
					success(e) {
						console.log('TCPSuccess', e)
					},
					fail(e) {
						console.log('TCPFail', e)
					},
					complete(e) {
						console.log('TCPComplete', e)
					}
				});
			}
		}
	}
</script>