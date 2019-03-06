<template>
	<div>
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
import Toasts from '@common/toast/toast';
import Modal from '@common/modal/modal';
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
			// rootConfig[name] && rootConfig[name].invoke();
			Modal.operation([
				{
					name: "订阅",
					onClick: () => {
						rootConfig[name] && rootConfig[name].invoke.on();
						Toasts.info('你点击了订阅');
					}
				},
				{
					name: "取消订阅",
					onClick: () => {
						rootConfig[name] && rootConfig[name].invoke.off();
						Toasts.info('你点击了取消订阅');
					}
				},
				{
					name: "强制执行",
					onClick: () => {
						rootConfig[name] && rootConfig[name].invoke.debugger();
						Toasts.info('你点击了强制执行');
					}
				}
			]);
		}
	},
};
</script>

<style lang="scss" scoped>
</style>
