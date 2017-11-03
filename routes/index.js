
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.hp = function(req, res){
	  res.render('hp', { title: 'Express' });
	};
	
exports.flightdetails = function(req, res){
	  res.render('flightdetails', { title: 'Express' });
	};
	
exports.ticket = function(req, res){
	  res.render('ticket', { title: 'Express' });
	};