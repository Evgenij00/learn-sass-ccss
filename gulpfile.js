let gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src(['app/sass/style.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function() {
    gulp.watch(['app/sass/**/*.scss'], gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('watch', 'sass'));