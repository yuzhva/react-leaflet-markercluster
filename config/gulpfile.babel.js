import gulp from 'gulp';
import runSequence from 'run-sequence';
import path from 'path';
import del from 'del';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import uglifyJS from 'gulp-uglify';
import uglifyCSS from 'gulp-clean-css';

const rootPath = path.join(__dirname, '..');
const srcPath = path.join(rootPath, 'src');
const distPath = path.join(rootPath, 'dist');

gulp.task('build', () => (
  runSequence('dist:clean', 'dist:script', 'dist:styles', 'uglify:script', 'uglify:styles')
));

gulp.task('dist:clean', () => (
  del(distPath, { force: true })
));

gulp.task('dist:script', () => (
  gulp.src(path.join(srcPath, 'react-leaflet-markercluster.js'))
    .pipe(babel({ presets: ['es2015', 'react'] }))
    .pipe(gulp.dest(distPath))
));

gulp.task('dist:styles', () => (
  gulp.src(path.join(srcPath, 'styles.scss'))
    .pipe(sass({ includePaths: [rootPath] }).on('error', sass.logError))
    .pipe(gulp.dest(distPath))
));

gulp.task('uglify:script', () => (
  gulp.src(path.join(distPath, 'react-leaflet-markercluster.js'))
    .pipe(uglifyJS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(distPath))
));

gulp.task('uglify:styles', () => (
  gulp.src(path.join(distPath, 'styles.css'))
    .pipe(uglifyCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(distPath))
));

gulp.task('gh-pages:clean', () => (
  del([path.join(rootPath, 'index.html'), distPath], { force: true })
));
