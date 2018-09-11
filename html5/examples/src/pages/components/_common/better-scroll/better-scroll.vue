<template>
	<div ref="betterWrapper" style="overflow: 'hidden'; position: relative">
		<div className="__scroller">
			<slot />
		</div>
	</div>
</template>

<script>
import Core from './core/Core';

export default {
	name: 'better-scroll',
	props: {
		opts: {
			type: Object,
			default: () => ({

			})
		}
	},
	data() {
		return {
		};
	},
	created() {
		// console.log('?');
	},
	mounted() {
		this.betterScroller = new Core(this.$refs.betterWrapper, this.opts);
		window.betterScroller = 	this.betterScroller;
	},
	updated() {
		this.betterScroller.refresh();
	},
	destroyed() {
		this.betterScroller.destroy();
	},
	methods: {
	},
};
</script>

<style lang="scss" scoped>
</style>
