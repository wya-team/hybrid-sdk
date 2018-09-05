<template>
	<set-title :title="id | capitalize">
		<contents :id="id"/>
	</set-title>
</template>

<script>
import Contents from '@components/events/detail/contents';
import { capitalize } from '@extends/filters/capitalize';

export default {
	name: 'events-detail',
	components: {
		Contents
	},
	filters: {
		capitalize
	},
	data() {
		const { id } = this.$route.params;
		return {
			id
		};
	},
	created() {
		
	},
	methods: {
	},
};
</script>

<style lang="scss" scoped>
</style>
