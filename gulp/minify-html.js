var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');

//task for html
gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('./*.html')
  .pipe(minifyHTML(opts))
  .pipe(gulp.dest('./public/dist/html'));
});