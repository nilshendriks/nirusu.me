var gulp = require('gulp');

function twigTask() {
  // place code for your default task here
  // cb();
    'use strict';
  var twig = require('gulp-twig');
  return gulp.src('./test.twig')
    .pipe(twig({
      data: {
        title: 'Gulp and Twig',
        benefits: [
          'Fast',
          'Flexible',
          'Secure'
        ]
      }
    }))
    .pipe(gulp.dest('./'));
}

exports.default = twigTask