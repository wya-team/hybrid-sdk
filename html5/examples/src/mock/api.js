// http://www.expressjs.com.cn/4x/api.html#res
module.exports = (req, res, next) => {
	// res.header('X-Hello', 'World');
	// console.log(`${req.method}\n____${JSON.stringify(req.query || {})}\n____${res.locals.data}\n____${req.protocol}`);
	
	let random = Math.ceil((Math.random() * 10));
	if (random > 9) {
		res.status(500).jsonp({
			error: "error message here"
		});

	} else if (random > 8) {
		res.send({
			status: 0,
			error: 'test'
		});
	} 
	if (random > 8) {
		next();
		return;
	}
	if (['PUT', 'POST', 'DELETE'].indexOf(req.method) !== -1) {
		res.send({
			status: 1,
			error: 'test'
		});
		next();
		return;
	}
	if (req.query.page) {
		res.send({
			status: 1,
			data: require('./data/test')
		});
	}
	next();
};