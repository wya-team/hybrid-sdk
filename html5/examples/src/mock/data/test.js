let Mock  = require('mockjs');
let Random = Mock.Random;
let size = [
	'300x250', '250x250', '240x400', '336x280', 
	'180x150', '720x300', '468x260', '234x360', 
	'188x310', '120x190', '120x160', '120x240', 
	'325x125', '728x190', '360x420', '1200x510', 
	'300x600'
];
let images = [1, 2, 3].map(x => Random.image('200x100', Random.color(), Random.word(2, 6)));
data = [];
for (let i = 0; i < 30; i++) {

	let content = Random.cparagraph(0, 10);

	data.push({
		id: i  + '_' + i,
		// title: Random.cword(8, 20),
		// desc: content.substr(0, 40),
		// tag: Random.cword(2, 6),
		// views: Random.integer(100, 5000),
		// images: images.slice(0, Random.integer(1, 3))
		img: Random.image(size[parseInt(Math.random() * 16)], Random.color(), Random.word(2, 6))
	});
}


module.exports = {
	currentPage: 1,
	totalPage: 10,
	list: data
};
