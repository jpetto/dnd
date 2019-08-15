const { dest, series, src, watch } = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

// clear _site directory
function clearBuild() {
    return del('./_site/');
}

// copy html files to _site directory
function copyHTML() {
    return src('*.html').pipe(dest('./_site/'));
}

// copy assets to _site directory (skipping scss)
function copyAssets() {
    return src(['./assets/**/*', '!./assets/scss/**'])
        .pipe(dest('./_site/assets/'));
}

// compile scss
function scss() {
    return src('assets/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('assets/css'));
}

// watch scss changes for local dev
function watchDev() {
    watch('assets/scss/**/*.scss', scss);
}

exports.build = series(clearBuild, scss, copyHTML, copyAssets);
exports.default = series(scss, watchDev);
