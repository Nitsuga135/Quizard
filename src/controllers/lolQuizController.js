const controller = {
	index: function (req, res) {
		res.render('lolQuiz');
	},
	error: function (req, res) {
		res.render('error404')
	}
};

module.exports = controller;
