<template>
	<div class="container" @click="handleClick">
		<div class="wrapper">
			<div>
				<i :class="icon" class="icon" />
				<span>{{ title }}</span>
			</div>
			<i class="arrow-right" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		to: [String, Object],
		icon: String,
		title: String,
		label: String,
	},

	computed: {
		
	},

	methods: {
		handleClick($event) {
			this.$router.push(this.to);
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	background-color: #fff;
	box-sizing: border-box;
	color: inherit;
	min-height: 48px;
	display: block;
	overflow: hidden;
	position: relative;
	text-decoration: none;
}
.wrapper {
	background-image: linear-gradient(180deg,#d9d9d9,#d9d9d9 50%,transparent 0);
	background-size: 120% 1px;
	background-repeat: no-repeat;
	background-position: 0 100%;
	background-origin: content-box;
	align-items: center;
	box-sizing: border-box;
	display: flex;
	font-size: 16px;
	line-height: 1;
	min-height: inherit;
	overflow: hidden;
	padding: 0 10px;
	width: 100%;
}
.icon {
	font-size: 22px;
	color: #26a2ff;
	display: inline-block;
	width: 30px;
	vertical-align: middle;
}
.arrow-right {
	border: 2px solid #c8c8cd;
	border-bottom-width: 0;
	border-left-width: 0;
	content: " ";
	top: 50%;
	right: 20px;
	position: absolute;
	width: 10px;
	height: 10px;
	transform: translateY(-50%) rotate(45deg);
}
</style>
