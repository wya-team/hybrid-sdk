<template>
	<set-title title="Methods 方法">
		<links v-for="item in routes" :key="item.to" v-bind="item" />
	</set-title>
</template>

<script>
import Links from '@components/links/links';

export default {
	name: 'methods',
	components: {
		Links
	},
	data() {
		return {
			routes: [
				{
					title: 'xx2x',
					to: '/methods/xxx2'
				},
				{
					title: 'xxx',
					to: '/methods/xx2'
				}
			]
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
