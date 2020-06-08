<template>
	<div>
		<div 
			v-hljs="`json`" 
			v-html="html" 
		/>
	</div>
</template>

<script>
import wya from '@wya/js-sdk';
import { hljs } from '@extends/directives/hljs';

export default {
	name: 'consts-contents',
	directives: {
		hljs
	},
	data() {
		return {
			wya
		};
	},
	computed: {
		html() {
			return `${JSON.stringify(this.wya)}`;
		} 
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
