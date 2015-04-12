var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var config = {
  base: './',
  js: 'app/**/*.js',
  libs: 'libs/**/*',
  sass: 'sass/**/*.scss',
  dist: {
    css: 'dist/css/',
    images: 'dist/images',
    js: 'dist/js'
  }
};

gulp.task('build', ['css', 'js'], function() {
});

gulp.task('watch', ['build'], function () {
  gulp.watch(config.sass, ['css']);
});

gulp.task('css', function () {
  gulp.src(config.sass)
    .pipe(plumber())
    //.pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist.css));
});

gulp.task('js', function() {
  gulp.src(config.js)
    .pipe(plumber())
    //.pipe(sourcemaps.init())
    //.pipe(concat())
    .pipe(uglify())
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist.js));
});