<template>
	<div class="c-cell" @click="handleClick">
		<div class="__wrapper">
			<div @click.stop="$emit('click', title)">
				<!-- <i :class="icon" class="__icon" /> -->
				<span
					class="__title"
				>{{ extra || '' }} {{ title }}</span>
			</div>
			<span class="__span">{{ label }}</span>
			<i class="__arrow-right" />
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
		extra: String
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
.c-cell {
	background-color: #fff;
	box-sizing: border-box;
	color: inherit;
	min-height: 48px;
	display: block;
	overflow: hidden;
	position: relative;
	text-decoration: none;
	.__wrapper {
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
	.__title {
		padding-left: 10px;
	}
	.__icon {
		font-size: 22px;
		color: #26a2ff;
		display: inline-block;
		width: 30px;
		vertical-align: middle;
	}
	.__span {
		flex: 1;
		text-align: right;
		padding-right: 32px;
		color: #8E8E93;
	}
	.__arrow-right {
		border: 2px solid #C7C7CB;
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
}

</style>
