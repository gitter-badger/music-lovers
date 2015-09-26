var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var babel   = require('gulp-babel');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var minify  = require('gulp-minify-css');
var sass    = require('gulp-sass');
var bourbon = require('node-bourbon').includePaths;

gulp.task('scripts', function() {
  gulp.src([
    'app/ajax.js',
    'app/data.js',
    'app/app.js',
    'app/selected.js',
    'app/list.js'
  ])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest('js/'));
});

gulp.task('sass', function() {
  gulp.src('sass/main.scss')
    .pipe(plumber())
    .pipe(sass({
      includePaths: bourbon,
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('css/'));
});

gulp.task('normalize', function() {
  gulp.src('node_modules/normalize.css/normalize.css')
    .pipe(minify())
    .pipe(gulp.dest('css/'));
});

gulp.task('fontstyles', function() {
  gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('css/'));
});

gulp.task('fontfiles', function() {
  gulp.src('node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest('fonts/'));
});

gulp.task('default', ['scripts', 'sass', 'normalize', 'fontstyles', 'fontfiles'], function() {
  gulp.watch(['app/**/*.js'], ['scripts']);
  gulp.watch(['sass/**/*.scss'], ['sass']);
});
