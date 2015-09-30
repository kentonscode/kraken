var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');

//test
gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
  .pipe(mocha({reporter: 'landing'}));
});

//watch
gulp.task('watch', function() {
  gulp.watch('app.js', function() {
    console.log('change occurred');
  });
});

//run by just typing gulp
gulp.task('default', ['test', 'watch']);