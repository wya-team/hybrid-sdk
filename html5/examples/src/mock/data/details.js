let Mock = require('mockjs');

let { Random } = Mock;

let items = [];
for (let i = 1; i <= 10; i++) {
	items.push({
		id: i,
		title: Random.cword(8, 20),
		imgs: [Random.image(), Random.image(), Random.image(), Random.image()],
		pre_id: i - 1 == 0 ? null : i - 1,
		next_id: i + 1 == 10 ? null : i + 1,
	});
}
module.exports = items;