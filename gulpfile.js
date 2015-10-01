var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');


//test
gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
  .pipe(mocha({reporter: 'landing'}));
});

//watch
gulp.task('watch', function() {
  gulp.watch('app.js', ['test'])
});

//task for uglify
gulp.task('compress', function() {
  return gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./public/dist'));
});

//task for html
gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
  
  return gulp.src('./*.html')
  .pipe(minifyHTML(opts))
  .pipe(gulp.dest('./public/dist/'));
});

//task for css
gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(gulp.dest('./public/dist/'));
});

//nodemon task
gulp.task('nodemon', function() {
  nodemon({
    script: 'app.js',
    ext: 'js'
  })
  .on('start', ['watch'])
  .on('change', ['watch'])
  .on('restart', function() {
    console.log('Restarted!');
  });
});

//run following when typing gulp
gulp.task('default', ['test', 'watch', 'compress', 'minify-html', 'minify-css']);