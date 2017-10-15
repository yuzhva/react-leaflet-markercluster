import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import uglifyJS from 'gulp-uglify';
import uglifyCSS from 'gulp-clean-css';

gulp.task('build', () => {
  runSequence('dist:clean', 'dist:script', 'dist:styles', 'uglify:script', 'uglify:styles');
});

gulp.task('dist:clean', () => (
  del('./dist/**')
));

gulp.task('dist:script', () => (
  gulp.src('./src/react-leaflet-markercluster.js')
    .pipe(babel({ presets: ['es2015', 'react'] }))
    .pipe(gulp.dest('./dist'))
));

gulp.task('dist:styles', () => (
  gulp.src('./src/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
));

gulp.task('uglify:script', () => (
  gulp.src('./dist/react-leaflet-markercluster.js')
    .pipe(uglifyJS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'))
));

gulp.task('uglify:styles', () => (
  gulp.src('./dist/styles.css')
    .pipe(uglifyCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'))
));

gulp.task('demo-app:clean', () => (
  del(['./index.html', './../../**'])
));
