var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//browsersync
gulp.task('browser-sync', ['minify-html'],  function() {
  browserSync.init({
    proxy: "localhost:1337"
  });

  gulp.watch('./*.html', ['minify-html']).on("change", browserSync.reload);
});