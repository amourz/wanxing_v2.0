<template>
	<div class="weui-tab">
		<view-box>

			<x-header style="background-color: #fbf9fe;"><span style="color:#000;">创建活动</span></x-header>

			<step v-model="step1" background-color='#fbf9fe'>
				<step-item title="step 1" description="活动信息"></step-item>
				<step-item title="step 2" description="关卡设置"></step-item>
				<step-item title="step 3" description="参加队伍"></step-item>
			</step>

			<group title="" v-show="show1">
				<x-input title="活动名称" name="name" placeholder="不少于4个字符" required min="4"></x-input>
			</group>

			<group title="" v-show="show2">
				<x-input title="关卡" name="name" placeholder="不少于4个字符" required min="4"></x-input>
			</group>

			<group title="" v-show="show3">
				<x-input title="队伍" name="name" placeholder="不少于4个字符" required min="4"></x-input>
			</group>
			<div class="btn_wrap">
				<x-button type="primary" @click.native="nextStep">下一步</x-button>
			</div>
		</view-box>
	</div>
</template>

<script>
	import {
		Group,
		ViewBox,
		Step,
		StepItem,
		XButton,
		XHeader,
		XInput
	} from 'vux'
	export default {
		components: {
			Group,
			ViewBox,
			Step,
			StepItem,
			XButton,
			XHeader,
			XInput
		},
		data() {
			return {
				step1: 0,
				show1: true,
				show2: false,
				show3: false
			}
		},
		methods: {
			nextStep() {
				this.step1++
					switch(this.step1) {
						case 1:
							this.show1 = false
							this.show2 = true
							this.show3 = false
							break;
						case 2:
							this.show1 = false
							this.show2 = false
							this.show3 = true
							break;
						default:
							break;
					}

			}
		}

	}
</script>

<style lang="less">

</style>