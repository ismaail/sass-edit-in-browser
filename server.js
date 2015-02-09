(function() {
	"use strict";

	var livereload = require('livereload');
	var server = livereload.createServer({
		port: 35729
	});

	server.watch(__dirname + "/public");
}());
