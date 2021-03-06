const gulp = require('gulp');
const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const watch = require('gulp-watch');
const connect = require('gulp-connect');

//compile sass and autoprefixer 
gulp.task('css', function () {
    return gulp.src('corona/sass/**.scss')
        .pipe(sass())
        .pipe(rename({basename:"style-dev"}))
        .pipe(autoprefixer('last 2 version'))
        .pipe(dest('corona/css'))
});

//compressed
gulp.task('comp', function () {
    return gulp.src('corona/css/style-dev.css')
        .pipe(sass(({outputStyle: 'compressed'})))
        .pipe(rename({basename:"style"}))
        .pipe(dest('corona/css/'))
});

//connect
gulp.task('connect', function() {
  connect.server();
});

//watch
gulp.task('watch',function(){
    gulp.watch('corona/sass/**.scss', gulp.series(['css']))
});