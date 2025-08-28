
const { src, dest, series, parallel, watch } = require('gulp');
const fileInclude = require('gulp-file-include');
const del = require('del');
const browserSync = require('browser-sync').create();

const paths = {
  html: ['src/**/*.html', '!src/partials/**'],
  assets: 'src/assets/**/*',
  dist: 'dist'
};

function clean() {
  return del([paths.dist]);
}

function html() {
  return src(paths.html)
    .pipe(fileInclude({ prefix: '@@', basepath: 'src' }))
    .pipe(dest(paths.dist));
}

function assets() {
  return src(paths.assets).pipe(dest(paths.dist + '/assets'));
}

function reload(done) {
  browserSync.reload();
  done();
}

function serveTask() {
  browserSync.init({ server: paths.dist, open: false });
  watch('src/**/*.html', series(html, reload));
  watch('src/assets/**/*', series(assets, reload));
}

function watchTask() {
  watch('src/**/*.html', html);
  watch('src/assets/**/*', assets);
}

exports.build = series(clean, parallel(html, assets));
exports.serve = series(exports.build, serveTask);
exports.watch = series(exports.build, watchTask);
