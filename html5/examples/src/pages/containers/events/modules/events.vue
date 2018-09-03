<template>
	<set-title title="Events 时间">
		<links v-for="item in routes" :key="item.to" v-bind="item" />
	</set-title>
</template>

<script>
import Links from '@components/links/links';

export default {
	name: 'events',
	components: {
		Links
	},
	data() {
		return {
			routes: [
				{
					title: 'xx2x',
					to: '/events/xxx2'
				},
				{
					title: 'xxx',
					to: '/events/xx2'
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
