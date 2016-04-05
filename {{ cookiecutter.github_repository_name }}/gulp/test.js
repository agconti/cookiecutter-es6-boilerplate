import gulp from 'gulp'
import mocha from 'gulp-mocha'
import xo from 'gulp-xo'

import {testSrc} from './config'


export function testJs () {
  return gulp.src(testSrc)
    .pipe(xo().on('error', () => this.emit('end')))
    .pipe(mocha())
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
}
