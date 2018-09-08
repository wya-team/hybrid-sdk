let Mock = require('mockjs');

let { Random } = Mock;

let items = [];
for (let i = 0; i <= 2; i++) {
	items[i] = {};
	items[i].value = i + '';
	items[i].label = `${i}_${Random.cword(1, 2)}`;
	items[i].children = [];
	for (let j = 0; j <= 3; j++) {
		items[i].children[j] = {};
		items[i].children[j].value = j + '';
		items[i].children[j].label = `${i}_${j}_${Random.cword(1, 2)}`;
		items[i].children[j].children = [];
		for (let k = 0; k <= 4; k++) {
			items[i].children[j].children[k] = {};
			items[i].children[j].children[k].value = k + '';
			items[i].children[j].children[k].label = `${i}_${j}_${k}_${Random.cword(1, 2)}`;
		}
	}
}
module.exports = items;