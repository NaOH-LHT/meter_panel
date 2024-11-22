<template>
	<view>
		<uni-card>
			<button @click="start">打开 Wi-Fi 模块</button>
			<button @click="stop">关闭 Wi-Fi 模块</button>
			<button @click="getDetail">获取已连接的 Wi-Fi 信息</button>
			<button @click="getList">获取 Wi-Fi 列表</button>
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
	export default {
		data() {
			return {
				isConnect: false
			}
		},
		onLoad(){
			//获取到 Wi-Fi 列表数据事件的监听函数
			uni.onGetWifiList((e)=>{
				console.log('onGetWifiList',e)
			})
		},
		onUnload(){
			//移除获取到 Wi-Fi 列表数据事件的监听函数。
			uni.offGetWifiList()
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
			}
		}
	}
</script>