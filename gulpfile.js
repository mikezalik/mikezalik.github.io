'use strict';

var gulp = require('gulp'),
concat = require('gulp-concat');

gulp.task("hello", function() {
    console.log("hello!")
});

gulp.task('compileSass', function() {
    gulp.src("input.scss")
    .pipe(gulp.dest('styles.css'));
})
