<template>
	<div class="vcm-modal">
		<div 
			v-show="visible"
			class="__bg" 
			@click="handleClose" 
		/>
		<transition name="fade" @after-leave="handleRemove">
			<div v-show="visible" class="__fixed">
				<div 
					v-for="(item, index) in operation"
					:key="index" 
					class="__item"
					@click="handleClick($event, item)"
				>
					{{ item.name }}
				</div>			
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		operation: Array
	},

	data() {
		return {
			// 先要隐藏在显示，才有transition
			visible: false
		};
	},
	mounted() {
		this.visible = true;
	},
	destroyed() {
	},
	methods: {
		handleRemove() {
			this.$emit('close');
			this.$emit('callback');
		},
		handleClose(e) {
			this.visible = false;
		},
		handleClick(e, item) {
			this.visible = false;
			item.onClick && item.onClick();
		}
	}
};
</script>

<style lang="scss" scoped>
.vcm-modal {
	.__bg {
		position: fixed;
		background: rgba(0, 0, 0, 0.4);
		z-index: 3888;
		height: 100%;
		width: 100%;
		left: 0;
		right: 0;
		margin: 0 auto;
		bottom: 0;
		opacity: 1;
	}
	.__fixed {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 3892;
		max-width: 80%;
		min-width: 60%;
		height: auto;
		background: white;
		border-radius: 3px;
		line-height: 1.5;
		text-align: center;
		transition: opacity .3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
		.__item {
			color: #515a6e;
			padding: 9px;
			&:not(:last-child) {
				border-bottom: 1px solid #e8eaec
			}
		}
	}
}
.fade-enter, .fade-leave-active {
	opacity: 0;
}
</style>