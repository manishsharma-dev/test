const express = require('express');
const port = process.env.PORT || 3010;
const app = express();

app.use('/', express.static(__dirname  + '/dist/'));

app.use('*', function (req, res, next) {
	// Just send the index.html for other files to support HTML5Mode
	res.sendFile('index.html', {root: __dirname + '/dist/'});
});

app.listen(port);
console.log('current directory is', __dirname);
console.log('server start on port ' + port);