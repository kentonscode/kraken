var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

//task for css
gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(gulp.dest('./public/dist/css'));
});
