var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function() {
    gulp.src('assets/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', ['scss'], function() {
    gulp.watch('assets/scss/**/*.scss', ['scss']);
});

gulp.task('default', ['watch']);