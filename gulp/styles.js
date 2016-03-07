'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('styles', function (done) {
    gulp.src(paths.src + '/app/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', done)
        .pipe(sourcemaps.write())
        .on('error', done)
        .pipe(gulp.dest(paths.tmp + '/serve/app/'))
        .on('error', done)
        .on('end', done);
});
