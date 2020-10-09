'use strict';

var gulp = require('gulp'),
concat = require('gulp-concat'),
sass = require('gulp-sass');

gulp.task("hello", function() {
    console.log("hello!")
});

gulp.task('compileSass', function() {
    gulp.src("input.scss")
    .pipe(sass())
    .pipe(gulp.dest('styles.css'));
})
