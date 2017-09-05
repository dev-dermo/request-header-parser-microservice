var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('<p>Visit <a href="whoami">/whoami</a> to get your details.</p>');
});

app.get('/whoami', function(req, res) {
	var result = {};
	
	result.ipaddress = req.headers['x-forwarded-for'].split(',')[0]; // this won't work on a local server
	result.language = req.headers['accept-language'].split(',')[0];
	
	var ua = req.headers['user-agent'];
	ua = ua.substring(ua.indexOf('(') + 1, ua.indexOf(')'));
	result.software = ua;
	
	res.send(result);
});

app.listen(8080, function() {
	console.log('App listening on port 8080');
});