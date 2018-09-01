<template>
	<div @click="handleClick">
		consts
	</div>
</template>

<script>
import Toasts from '../../../components/_common/toasts/toasts';

export default {
	name: 'consts',
	data() {
		return {
		};
	},
	created() {
		console.log('?');
	},
	methods: {
		handleClick() {
			Toasts.info("222");
		}
	},
};
</script>

<style lang="scss" scoped>

</style>
