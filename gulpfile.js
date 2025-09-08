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
      .pipe(dest(paths.dist))
      .pipe(browserSync.stream()); // <- triggers reload
}

function assets() {
  return src(paths.assets)
      .pipe(dest(`${paths.dist}/assets`))
      .pipe(browserSync.stream()); // <- triggers reload
}

function serve() {
  browserSync.init({ server: { baseDir: paths.dist }, open: false });

  // return the watchers so Gulp keeps the task running
  const w1 = watch('src/**/*.html', html);
  const w2 = watch('src/assets/**/*', assets);
  return Promise.all([w1, w2]); // or just: return; (either keeps process open)
}

exports.build = series(clean, parallel(html, assets));
exports.serve = series(exports.build, serve);
exports.watch = exports.serve;
