<template>
	<div>
		<cell 
			v-for="(item, key) in routes" 
			:key="key" 
			v-bind="item"
			extra="☞ "
			@click="handleClick"
			@run="handleRun"
		/>
	</div>
</template>

<script>
import Cell from '@common/cell/cell';
import * as rootConfig from './detail/modules/root';

export default {
	name: 'methods',
	components: {
		Cell
	},
	data() {
		return {
			routes: rootConfig
		};
	},
	created() {
		// console.log('?');
	},
	methods: {
		handleClick(name) {
			rootConfig[name] && rootConfig[name].invoke();
		},
		handleRun(name) {
			this.$router.push(`/methods/run/${name}`);
		}
	},
};
</script>

<style lang="scss" scoped>
</style>
