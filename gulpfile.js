var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;
    
gulp.task('default', function(){
    util.log('This is a gulp file');
})

//Process scss files
gulp.task('build-css', function(){
    return gulp.src('source/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('stylesheets'));
});

//Livereload with browser-sync
gulp.task('serve', function(){
    browserSync({
        port:3000,
        server: './'
    });
    gulp.watch('*.html, stylesheets/*.css,',['build-css'], reload);
})