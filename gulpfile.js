var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync').create();


//test
gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
  .pipe(mocha({reporter: 'landing'}));
});

//task for uglify
gulp.task('compress', function() {
  return gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./public/dist/js'));
});

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

//task for css
gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(gulp.dest('./public/dist/css'));
});


//task for images 
gulp.task('optimize-img', function () {
  return gulp.src('./img/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./public/dist/img'));
});

//browsersync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./*.html', ['test', 'minify-html']).on("change", browserSync.reload);
});

//nodemon task
gulp.task('nodemon', function() {
  nodemon({
    script: 'app.js',
  })
  .on('start', ['test'])
});

//run following when typing gulp
gulp.task('default', ['nodemon', 'compress', 'minify-html', 'minify-css', 'optimize-img', 'browser-sync']);