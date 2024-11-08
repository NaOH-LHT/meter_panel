<template>
	<view>
		<uni-calendar 
		ref="calendar"
		:insert="false"
		@confirm="confirm"
		 />
		 <button  class="calendar-button" @click="open">打开日历</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			open(){
				this.$refs.calendar.open();
			},
			confirm(e) {
				console.log(e);
			}
		}
	}
</script>

<style>
	.calendar-button{
		margin-top: 10px;
		color: white;
		background-color: black;
		width:100px;
	}
</style>