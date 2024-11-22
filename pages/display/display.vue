<template>
	<view class="container">
		<view class="header">
			<uni-search-bar @confirm="onHandleConfirmSearch" @input="onHandleInput" />
		</view>
		<view class="content">
			<swiper class="swiper" :current="currentPage-1" @change="handleSwiperChange" :indicator-dots="false"
				:autoplay="false">
				<swiper-item>
					<scroll-view class="swiper-item">
						<uni-collapse>
							<uni-collapse-item titleBorder="none">
								<template v-slot:title>
									<uni-list>
										<uni-list-item title="标题使用自定义标题插槽" :show-extra-icon="true"
											:extra-icon="extraIcon">
										</uni-list-item>
									</uni-list>
								</template>
								<view class="content">
									<text class="text">折叠内容主体，可自定义内容及样式</text>
								</view>
							</uni-collapse-item>
							<uni-collapse-item title="折叠内容使用 uni-list 组件">
								<uni-list>
									<uni-list-item title="列表文字"></uni-list-item>
									<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
									<uni-list-item title="列表右侧显示 switch" :show-switch="true"></uni-list-item>
									<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon"
										title="列表左侧带扩展图标"></uni-list-item>
									<uni-list-item title="列表左侧带略缩图" note="列表描述信息"
										thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
										thumb-size="lg" rightText="右侧文字" showArrow></uni-list-item>
									<uni-list-item title="开启点击反馈" clickable showArrow @click="onClick"></uni-list-item>
								</uni-list>
							</uni-collapse-item>
						</uni-collapse>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="swiper-item">
						<uni-collapse>
							<uni-collapse-item titleBorder="none">
								<template v-slot:title>
									<uni-list>
										<uni-list-item title="标题使用自定义标题插槽" :show-extra-icon="true"
											:extra-icon="extraIcon">
										</uni-list-item>
									</uni-list>
								</template>
								<view class="content">
									<text class="text">折叠内容主体，可自定义内容及样式</text>
								</view>
							</uni-collapse-item>
							<uni-collapse-item title="折叠内容使用 uni-list 组件">
								<uni-list>
									<uni-list-item title="列表文字"></uni-list-item>
									<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
									<uni-list-item title="列表右侧显示 switch" :show-switch="true"></uni-list-item>
									<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon"
										title="列表左侧带扩展图标"></uni-list-item>
									<uni-list-item title="列表左侧带略缩图" note="列表描述信息"
										thumb="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
										thumb-size="lg" rightText="右侧文字" showArrow></uni-list-item>
									<uni-list-item title="开启点击反馈" clickable showArrow @click="onClick"></uni-list-item>
								</uni-list>
							</uni-collapse-item>
						</uni-collapse>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<view class="footer">
			<uni-pagination :show-icon="true" pageSize="1" :total="2" :current="currentPage" title="标题文字"
				@change="onHandlePaginationChange" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentPage: 1
			}
		},
		methods: {
			onHandleConfirmSearch(e) {
				console.log("onHandleConfirmSearch", e.value)

			},
			onHandleInput(value) {
				console.log("onHandleInput", value)
			},
			handleSwiperChange(e) {
				console.log("handleSwiperChange", e.detail.current)
				this.currentPage = e.detail.current + 1
			},
			onHandlePaginationChange(e) {
				console.log(e)
				this.currentPage = e.current
			}
		},
		onLoad() {
			uni.createSelectorQuery().select('.header').boundingClientRect(data => {
				console.log(data)
			}).exec()
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 93vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		box-sizing: border-box;

		.header {
			width: 100%;
			background-color: #fff;
			z-index: 10;
		}

		.content {
			width: 100%;
			height: 100%;

			.swiper {
				height: 100%;

				.swiper-item {}
			}
		}
	}
</style>