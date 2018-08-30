<template>
	<div @click="$router.push('/login')">
		tpl-nolayout
	</div>
</template>

<script>
export default {
	name: 'tpl-nolayout',
	data() {
		return {
		};
	},
	created() {
		console.log('?');
	},
	methods: {
	},
};
</script>

<style lang="scss" scoped>
</style>
