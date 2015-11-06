import gulp from 'gulp'
import mocha from 'gulp-mocha'

import {testSrc} from './config'


export function testJs () {
  return gulp.src(testSrc)
    .pipe(mocha())
    .once('error', () => process.exit(1))
}
