<template>
	<div>
		<div style="height: 60px" />
		<div class="g-flex g-bg-white g-tc g-reset g-pd-tb-10 g-fixed c-footer-nav">
			<router-link 
				v-for="item in routes" 
				:key="item.router" 
				:to="item.router" 
				class="g-col"
				active-class="g-c-blue-mid"
			>
				{{ item.name }}
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'footer-nav',
	data() {
		return {
			routes: [
				{
					router: '/consts',
					name: '常量'
				},
				{
					router: '/events',
					name: '事件'
				},
				{
					router: '/methods',
					name: '方法'
				},
				{
					router: '/assists',
					name: '辅助'
				}
			]
		};
	},
	computed: {
	},
	watch: {
	},
	mounted() {
		
	},
	methods: {
	}
};
</script>

<style scoped>
	.c-footer-nav {
		bottom: 0;
		left: 0;
		right: 0;
		border-top: 1px solid #edeef0;
	}
</style>