import wya from 'wya-js-sdk';
import Toasts from '@common/toasts/toasts';
import markdown from '@docs/methods/getPicture.md';

const invoke = () => {
	wya.invoke('getPicture', {
		// ...
	}).then((res) => {
		res = typeof res === 'object' ? JSON.stringify(res) : (res || '无数据');
		Toasts.info(res, 0);
	}).catch((res = {}) => {
		Toasts.info(`执行失败：${res.msg}`, 0);
	});
};

export default {
	to: '/methods/getPicture',
	title: 'getPicture',
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
