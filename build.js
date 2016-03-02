'use strict';
var build = require('../rtsbuild/');
build.compilator({
    entry: './src/app',
    outFile: 'js/app.js'
}) //
.pipe(build.dest('./dist')) //
// .pipe(build.minify()) //
// .pipe(build.dest('./prod')) //
;


var express = require('express');
var app = express();
app.use(express.static('./dist'));
app.listen(80);
