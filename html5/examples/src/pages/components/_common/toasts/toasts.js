import Vue from 'vue';
import Toasts from './toasts.vue';

const RcInstance = {
	APIS: {}
};

const Dom = document.body;
const cName = "MToasts";


const Target = {
	info(message, duration = 3, onCallback, showClose = true, opts = {}) {
		// RcInstance.APIS[cName] && Toast.hide();
		const div = document.createElement('div');
		const VueComponent = Vue.extend(Toasts);
		let vm;

		vm = new VueComponent({
			el: div,
			propsData: {
				...opts,
				message,
				duration: duration == 0 ? 1 * 60 * 60 * 24 : duration,
				onCallback,
				showClose
			}
		});

		vm.$on('on-close', () => {
			vm.$destroy();
			// 主动卸载节点
			Dom.removeChild(vm.$el);
			delete RcInstance.APIS[cName];
		});

		RcInstance.APIS[cName] = vm;

		document.body.appendChild(vm.$el);
	}
};

export default Target;
