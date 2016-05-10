#!/usr/bin/env node

var ansh = require('../index');
var date = new Date();
var day = date.getDate(),
    month = date.getMonth();
if (day == 10 && month == 4) {
    console.log("happy birthday ansh");
}
else {
    console.log(ansh.ansh());
}
