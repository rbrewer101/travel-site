var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');
var taskListing = require('gulp-task-listing');
var pug = require('gulp-pug2');

gulp.task('help', taskListing);

gulp.task('html', function buildHTML() {
  return gulp.src('./app/*.pug')
            .pipe(pug())
            .pipe(gulp.dest('./app/views'));
});

gulp.task('copy-project', function() {
  return gulp.src('../travel-site/*.*')
            .pipe(gulp.dest('../travel-site2'));
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

  watch('./app/*.pug', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});