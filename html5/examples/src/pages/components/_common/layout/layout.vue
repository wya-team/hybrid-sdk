<template>
	<div>
		<transition name="fade" mode="out-in">
			<router-view 
				class="v-router"
			/>
		</transition>
		<footer-nav v-show="isShow"/>
	</div>
</template>
<script>
import FooterNav from '@common/footer-nav/footer-nav.vue';

export default {
	components: {
		FooterNav
	},
	data() {
		return {
		};
	},
	computed: {
		isShow() {
			return ['/events', '/consts', '/methods', '/assists'].includes(this.$route.path);
		}
	},
	mounted() {
		
	},
	methods: {
	}
};
</script>
<style lang="scss" scoped>
// .v-router {
// 	transition: opacity 0.1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
// }
// .fade-enter, .fade-leave-active {
// 	opacity: 0;
// }
</style>