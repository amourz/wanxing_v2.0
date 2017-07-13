<template>
	<!--<div class="weui-tab" style="position: fixed">
-->
		<view-box style="position: fixed;width:100%;">
			<div style="height:44px;">
				<sticky scroll-box="vux_view_box_body">
					<div style="background-color:#fbf9fe;">头部固定搜索框</div>
				</sticky>
			</div>
			
				
				<scroller width="100%" style="top: 44px;" :on-refresh="refresh" :on-infinite="loadMore" ref="scroller">
					<swiper v-show="showSlider" loop auto :list="slider"></swiper>
					<card v-for="item in list">
						<img slot="header" :src="item.pic" style="width:100%;display:block;">
						<div slot="content" style="padding: 15px;">
							<p style="font-size:14px;line-height:1.2;">
								{{item.name}}
							</p>
							<p style="color:#999;font-size:12px;">{{item.desc}}</p>
						</div>
					</card>

				</scroller>
			<tabbar>
			<tabbar-item selected link="index.html">
				<img slot="icon" src="../../assets/icon/play.png">
				<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item link="new.html">
				<img slot="icon" src="../../assets/icon/time.png">
				<span slot="label">新建</span>
			</tabbar-item>
			<tabbar-item link="me.html">
				<img slot="icon" src="../../assets/icon/me.png">
				<span slot="label">我的</span>
			</tabbar-item>

		</tabbar>
		</view-box>
		
	<!--</div>-->
</template>

<script>
	import {
		Tabbar,
		TabbarItem,
		Swiper,
		ViewBox,
		Card,
		XHeader
	} from 'vux'
	

	import plusReady from '../../common/plusReady.js'

	const baseList = [{
		id: 312,
		url: 'javascript:',
		img: 'http://img.wondfun.com/data/attachment/portal/201703/13/095450wacppchcdu1ahbcc.jpg',
		title: '玩星漫游指南'
	}, {
		id: 312,
		url: 'javascript:',
		img: 'https://static.vux.li/demo/2.jpg',
		title: '送你一辆车'
	}, {
		id: 312,
		url: 'javascript:',
		img: 'https://static.vux.li/demo/3.jpg',
		title: '送你一次旅行'
	}]

	const urlList = baseList.map((item, index) => ({
		url: 'http://www.wondfun.com/portal.php?mod=view&aid=' + item.id,
		img: item.img,
		title: `${item.title}`
	}))

	export default {
		components: {
			Tabbar,
			TabbarItem,
			Swiper,
			ViewBox,
			Card,
			XHeader
		},
		data() {
			return {
				 slider: urlList,
				 showSlider:false,
				list: [],
				imgURL:'https://img.wondfun.com/api/timedriver/',
				noData: false,
				pageSize: 5,
				pageIndex: 0

			}
		},
		mounted() {
			this.fetch();
			plusReady(this.closeSplash)
			this.$refs.scroller.finishInfinite(true);

		},
		methods: {
			closeSplash() {
				plus.navigator.closeSplashscreen()
			},
			fetch() {
				var that = this;
				let url = 'http://www.wondfun.cn/api/wanxingv2/event.php'
				var params = {
					act: 'list_index',
					pageindex: that.pageIndex,
					pagesize: that.pageSize
				}

				this.$http.post(url, params)
					.then(function(res) {
						//console.log(JSON.stringify(res.data))
						var data = res.data
						if(data && data.length === 0) {
							that.noData= true

						} else {
							for(var i = 0; i < data.length; i++) {
								data[i].pic=that.imgURL+data[i].pic
								that.list.push(data[i]);
							}
							that.pageIndex++
                            that.noData = false
						}
                       
					})
					.catch(function(err) {
						console.log(err);
					})
			},
			loadMore(done) {
				if(this.noData) {
					
					setTimeout(() => {
						done(true)
					}, 1500)
					return
				} else {
					
					setTimeout(() => {
						this.fetch()
						done()

					}, 1500)
				}
			},

			refresh(done) {
				this.pageIndex = 0
				this.list = []
				setTimeout(() => {
					this.fetch()
					done()
				}, 1500)
			}
		}

	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	body {
		background-color: #fbf9fe;
	}
</style>