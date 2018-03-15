var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');

var testFiles = [
  'api/controllers/ContactController.js',
  'api/controllers/GroupController.js',
  'api/models/Contact.js',
  'api/models/Group.js'
]

gulp.task('default', function () {
  gulp.src([ 'lib/**' ])
    .pipe(babel())
    .pipe(gulp.dest('dist/lib'));

  gulp.src([ 'api/**' ].concat(testFiles.map(function(file) { return '!'+file })))
    .pipe(babel())
    .pipe(gulp.dest('dist/api'));

  gulp.src([ 'config/**' ])
    .pipe(babel())
    .pipe(gulp.dest('dist/config'));
});

gulp.task('test', function () {
  gulp.src([ 'lib/**' ])
    .pipe(babel())
    .pipe(gulp.dest('dist/lib'));

  gulp.src([ 'api/**' ])
    .pipe(babel())
    .pipe(gulp.dest('dist/api'));

  gulp.src([ 'config/**' ])
    .pipe(babel())
    .pipe(gulp.dest('dist/config'));
});


gulp.task('clean', function() {
  return del(testFiles.map(function(file) { return 'dist/'+file }));
});
