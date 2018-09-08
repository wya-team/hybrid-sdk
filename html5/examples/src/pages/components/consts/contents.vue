<template>
	<div>
		<div 
			v-hljs="`json`" 
			v-html="html" 
		/>
	</div>
</template>

<script>
import wya from 'wya-js-sdk';
import { hljs } from '@extends/directives/hljs';

export default {
	name: 'consts-contents',
	directives: {
		hljs
	},
	data() {
		return {
			html: `${JSON.stringify(wya)}`
		};
	},
	computed: {
	},
	created() {
	},
	mounted() {
		
	},
	methods: {
		handleClick() {
			
		}
	},
};
</script>

<style lang="scss" scoped>

</style>
