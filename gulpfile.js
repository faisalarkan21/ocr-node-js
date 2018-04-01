const gulp = require('gulp');
const clean = require('gulp-clean');
const run = require('gulp-run-command').default;


gulp.task('clean', () =>
  gulp.src('ocr-result/*', { read: false })
    .pipe(clean()));

gulp.task('default', ['clean'], run('node index.js'));
