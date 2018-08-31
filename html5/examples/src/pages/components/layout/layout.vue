<template>
	<div>
		<div>我的layout</div>
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>
<script>
export default {
	data() {
		return {
		};
	},
	computed: {
	},
	mounted() {
		
	},
	methods: {
	}
};
</script>
