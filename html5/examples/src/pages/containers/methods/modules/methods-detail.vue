<template>
	<set-title :title="id">
		<contents :id="id"/>
	</set-title>
</template>

<script>
import Contents from '@components/methods/detail/contents';
import { capitalize } from '@extends/filters/capitalize';

export default {
	name: 'methods-detail',
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
