<template>
	<div class="g-reset"> 
		<div class="fixed">
			<div 
				v-if="visible && isShowBack" 
				class="back" 
				@click="handleClick"
			>
				<div class="arrow-left" />
			</div>
			<h1 class="title">{{ title }}</h1>
		</div>
		<div class="fixed-placeholder" />
		<better-scroll ref="bs" :style="{ height: height + 'px' }" :bs-opts="bsOpts">
			<slot />
		</better-scroll>
	</div>
</template>
<script>
import BetterScroll from '@common/better-scroll/better-scroll';

let oldPos = {
	// [this.$route.path] : {
	// 	x:
	// 	y:
	// }
};	

export default {
	name: "set-title",
	components: {
		BetterScroll
	},
	props: {
		title: String,
		isShowBack: {
			default: true,
			type: Boolean
		},
		offset: {
			type: Number,
			default: -45
		},
		bsOpts: Object
	},
	data() {
		return {
			path: this.$route.path
		};
	},
	computed: {
		visible() {
			return ['/consts', '/events', '/methods', '/assists'].indexOf(this.$route.path) < 0;
		},
		height() {
			let h = window.innerHeight + this.offset + (!this.visible ? (-41) : 0);
			return h;
		}
	},
	mounted() {
		document.title = this.title || document.title;
		let instance = this.$refs.bs.betterScroller;
		let { x = 0, y = 0 } = oldPos[this.path] || {};
		instance.scrollTo(x, y);
	},
	beforeDestroy() {
		let { x, y } = this.$refs.bs.betterScroller;
		oldPos = {
			...oldPos,
			[this.path]: {
				x,
				y
			}
		};
	},
	methods: {
		handleClick() {
			this.$router.back();
		}
	}
};
</script>
<style lang="scss" scoped>
.fixed {
	position: fixed;
	width: 100%;
	opacity: .96;
	z-index: 10;
}
.fixed-placeholder {
	height: 44px;
}
.title {
	font-size: 18px;
	margin: 0 auto;
	padding: 13px 0;
	text-align: center;
	display: block;
	line-height: 1;
	margin-bottom: 10px;
	background: white;
	border-bottom: 1px solid #edeef0;
}
.back {
	display: inline-block;
	position: absolute;
	left: 12px;
	width: 44px;
	height: 44px;
	text-align: center;
	i {
		font-size: 24px;
		line-height: 40px;
	}
}
.arrow-left {
	border: 2px solid #333;
	border-bottom-width: 0;
	border-right-width: 0;
	content: " ";
	top: 50%;
	right: 20px;
	position: absolute;
	width: 10px;
	height: 10px;
	transform: translateY(-50%) rotate(-45deg);
}
</style>