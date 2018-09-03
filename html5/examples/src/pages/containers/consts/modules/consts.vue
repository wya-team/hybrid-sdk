<template>
	<set-title title="Constants 常量">
		<div 
			v-hljs="'json'" 
			v-html="html" 
		/>
	</set-title>
</template>

<script>
import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import { hljs } from '@extends/directives/hljs';

export default {
	name: 'consts',
	directives: {
		hljs
	},
	data() {
		return {
			html: `${JSON.stringify(wya)}`
		};
	},
	created() {
	},
	mounted() {
		
	},
	methods: {
		handleClick() {
			Toasts.info("222", 1.5, () => {
				console.log('回调');
			});
		}
	},
};
</script>

<style lang="scss" scoped>

</style>
