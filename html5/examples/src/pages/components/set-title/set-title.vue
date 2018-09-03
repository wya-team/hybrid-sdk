<template>
	<div class="g-reset">
		<div v-if="visible && isShowBack" class="back">
			<i>?</i>
		</div>
		<h1 class="title">{{ title }}</h1>
		<slot />
	</div>
</template>
<script>
export default {
	name: "set-title",
	props: {
		title: String,
		isShowBack: {
			default: true,
			type: Boolean
		}
	},
	data() {
		return {
		};
	},
	computed: {
		visible() {
			return ['/consts', '/events', '/methods'].indexOf(this.$route.path) < 0;
		}
	},
	mounted() {
		document.title = this.title || document.title;
	},
	methods: {
	}
};
</script>
<style lang="scss" scoped>
.title {
	font-size: 20px;
	margin: 20px auto;
	text-align: center;
	display: block;
	line-height: 1;
}
.back {
	display: inline-block;
	position: absolute;
	left: 12px;
	top: 10px;
	width: 40px;
	height: 40px;
	text-align: center;
	i {
		font-size: 24px;
		line-height: 40px;
	}
}
</style>