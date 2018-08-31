<template>
	<div>
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
		<footer-nav v-show="isShow"/>
	</div>
</template>
<script>
import FooterNav from '../footer-nav/footer-nav.vue';

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
			return ['/events', '/consts', '/methods'].includes(this.$router.currentRoute.path);
		}
	},
	mounted() {
		
	},
	methods: {
	}
};
</script>
