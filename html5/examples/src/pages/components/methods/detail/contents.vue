<template>
	<div 
		v-md 
		class="g-md-reset g-pd-lr-10 g-bg-white g-pd-tb-10" 
		v-html="markdown" 
	/>
</template>

<script>
import wya from 'wya-js-sdk';
import { hljs } from '@extends/directives/hljs';
import { md } from '@extends/directives/md';
import * as rootConfig from './modules/root';

export default {
	name: 'consts-contents',
	directives: {
		hljs,
		md
	},
	props: {
		id: String
	},
	data() {
		return {
			...rootConfig[this.id],
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
