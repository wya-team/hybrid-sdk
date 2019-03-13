import wya from '@wya/js-sdk';
import Toasts from '@common/toast/toast';
import markdown from '@docs/methods/photoGet.md';

const invoke = () => {
	wya.invoke('photo/get', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/photoGet',
	title: 'photo/get',
	label: '',
	invoke,
	markdown,
	param: {
		sourceType: 'camera',
		encodingType: 'png',
		mediaValue: 'pic',
		destinationType: 'url',
		direction: false,
		allowEdit: false,
		preview: false,
		quality: 50,
		videoQuality: 'high',
		targetWidth: '',
		targetHeight: '',
		saveToPhotoAlbum: false,
		groupName: false,
	}
};
