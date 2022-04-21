var gulp = require('gulp');

function twigTask() {
  // place code for your default task here
  // cb();
    'use strict';
  var twig = require('gulp-twig');
  return gulp.src('./test.twig')
    .pipe(twig({
      data: {
        title: 'test Gulp and Twig',
        benefits: [
          'Fast',
          'Flexible',
          'Secure'
        ],
        homephotos: [
          {
            'photoID': '001',
            'photoSRC': 'assets/images/studio/20220420_13-27-37_DSCF3613_6.jpg'
          },
          {
            'photoID': '002',
            'photoSRC': 'assets/images/studio/20220420_13-54-39_DSCF3628_6.jpg'
          }
        ]
      }
    }))
    .pipe(gulp.dest('./'));
}

exports.default = twigTask