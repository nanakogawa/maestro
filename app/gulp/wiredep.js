var gulp = require('gulp'),
     wiredep = require('wiredep').stream;

 gulp.task('bower', function () {
  gulp.src('../index.html')
   .pipe(wiredep())
   .pipe(gulp.dest('../public/dist'));
 });