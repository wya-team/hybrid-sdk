module.exports = {
	navigator: ['push', 'pop'],
	app: ['install', 'uninstall', 'open', 'reboot', 'has'],
	clipboard: ['get', 'set'],
	storage: ['get', 'set', 'remove', 'clear', 'getAllKeys'],
	photo: ['get', 'save'],
	notification: ['add', 'remove'],
	floatBall: ['show', 'hide'],
	system: ['sms', 'mail', 'contacts', 'call', 'getBattery', 'getNetwork'],
	screen: ['orientate', 'keepOn', 'toLauncher'],
	style: ['setWin', 'setStatusBar', 'setBadge'],
	memory: ['getCache', 'clearCache', 'getTotal', 'getFree'],
	record: ['start', 'stop', 'pause', 'resume', 'restart'],
	audio: ['start', 'stop', 'pause', 'resume', 'restart'],
	download: ['start', 'cancel', 'pause', 'resume', 'restart'],
	upload: ['start', 'cancel', 'pause', 'resume', 'restart'],
	location: ['open', 'close', 'get'],
	sensor: ['open', 'close'],
	video: ['open'],
	wifi: [],
	bluetooth: [],
	nfc: [],

	// 内部使用模块
	// debugger: ['invoke'],
	// event: ['add', 'remove'],
};
