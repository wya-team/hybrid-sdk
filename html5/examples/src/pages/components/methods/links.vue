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
		scheme2id(scheme) {
			let arr = scheme.split('/');
			return arr[0] + arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
		},
		handleClick(scheme) {
			let name = this.scheme2id(scheme);
			rootConfig[name] && rootConfig[name].invoke();
		},
		handleRun(scheme) {
			let name = this.scheme2id(scheme);
			this.$router.push(`/methods/run/${name}`);
		}
	},
};
</script>

<style lang="scss" scoped>
</style>
