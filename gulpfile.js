var gulp = require('gulp');
var requireDir = require('require-dir');

//run following when typing gulp
gulp.task('default', ['nodemon', 'compress', 'minify-html', 'minify-css', 'optimize-img', 'browser-sync']);

require('require-dir')('./gulp');  