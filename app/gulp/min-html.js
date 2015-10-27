 var gulp = require('gulp'),
     minifyHTML = require('gulp-minify-html');

 gulp.task('minify-html', function() {
  var opts = {
   conditionals: true,
   spare: true
  };

  return gulp.src('../html/*.html')
   .pipe(minifyHTML(opts))
   .pipe(gulp.dest('../public/dist'))
 });