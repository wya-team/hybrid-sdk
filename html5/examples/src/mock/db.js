let Mock = require('mockjs');

module.exports = () => {
	let res = {};
	res.test = require('./data/test');
	res.filters = require('./data/filters');
	res.logins = require('./data/logins');
	res.list = require('./data/lists');
	res.details = require('./data/details');

	for (let i in res) {
		res[i] = Object.assign({}, {
			status: 1,
			data: res[i]
		});
	}
	return res;
};