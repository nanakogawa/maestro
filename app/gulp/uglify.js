var gulp = require('gulp'),
     uglify = require('gulp-uglify');

 gulp.task('compress', function() {
  return gulp.src('../js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('../public/dist'))
 });