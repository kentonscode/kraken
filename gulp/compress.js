var gulp = require('gulp');
var uglify = require('gulp-uglify');

//task for uglify
gulp.task('compress', function() {
  return gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./public/dist/js'));
});