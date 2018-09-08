let Mock = require('mockjs');

let { Random } = Mock;
let items = [];
for (let i = 1; i <= 30; i++) {
	items.push({
		id: i,
		title: Random.cword(8, 20),
		img_count: Random.natural(60, 100),
		img: Random.image(),
		time: Random.datetime('yyyy-MM-dd A HH:mm:ss')
	});
}


module.exports = {
	"_items": items,
	"_links": {
		"self": {
			"href": "http://localhost/users?page=1"
		},
		"next": {
			"href": "http://localhost/users?page=2"
		},
		"last": {
			"href": "http://localhost/users?page=50"
		}
	},
	"_meta": {
		"totalCount": 1000,
		"pageCount": 50,
		"currentPage": 1,
		"perPage": 20
	}
};