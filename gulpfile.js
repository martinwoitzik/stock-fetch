var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var config = {
  base: './',
  sass: 'sass/**/*.scss',
  dist: {
    bundle: 'dist/js/app.min.js',
    css: 'dist/css/',
    images: 'dist/images',
    scripts: 'dist/js'
  }
};

gulp.task('build', ['css'], function() {
});

gulp.task('watch', ['build'], function () {
  gulp.watch(config.sass, ['css']);
});

gulp.task('css', function () {
  gulp.src(config.sass)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    // Compress SCSS during production build.
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist.css));
});
