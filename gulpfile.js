var gulp = require('gulp');
require('require-dir')('./gulp');  

//run following when typing gulp
gulp.task('default', ['nodemon','browser-sync', 'optimize-img', 'compress', 'minify-css']);
