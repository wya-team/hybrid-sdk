<template>
	<div class="g-m-t-10">
		<cell 
			v-for="(item, key) in routes" 
			:key="key" 
			v-bind="item"
			extra="☞ "
			@click="handleClick"
		/>
	</div>
</template>

<script>
import Cell from '@common/cell/cell';
import * as rootConfig from './detail/modules/root';

export default {
	name: 'events',
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
		}
	},
};
</script>

<style lang="scss" scoped>
</style>
