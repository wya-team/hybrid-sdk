import Vue from 'vue';
import Modal from './modal.vue';

const RcInstance = {
	APIS: {}
};

const Dom = document.body;
const cName = "MModal";


const Target = {
	operation(operation, opts = {}) {
		const div = document.createElement('div');
		const VueComponent = Vue.extend(Modal);
		let vm;
		vm = new VueComponent({
			el: div,
			propsData: {
				...opts,
				operation,
			},
			methods: {
			}
		});

		vm.$on('close', () => {
			vm.$destroy();
			// 主动卸载节点
			Dom.removeChild(vm.$el);
			delete RcInstance.APIS[cName];
		});
		RcInstance.APIS[cName] = vm;

		document.body.appendChild(vm.$el);

		return vm;
	}
};

export default Target;
