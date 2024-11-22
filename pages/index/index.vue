<template>
	<view>
		<uni-card>
			<button @click="connect">连接串口</button>
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
		data(){
			return{
				isConnect:false
			}
		},
		methods:{
			connect(){
				this.isConnect=true
			},
			goDisplay(){
				uni.navigateTo({
					url:'/pages/display/display'
				})
			},
			goInput(){
				uni.navigateTo({
					url:'/pages/input/input'
				})
			}
		}
	}
</script>