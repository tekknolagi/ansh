#!/usr/bin/env node

var ansh = require('../index');
var imaging = require('imaging');
imaging.draw('ansh.png', function (resp, status) {
    if (status == 'success') {
	console.log(resp);
    }
    else {
	console.log('Could not draw Ansh.');
    }
});
