import gulp from 'gulp'
import browserSync from 'browser-sync'
import changed from 'gulp-changed'

import {baseDir, jsSrc, scssSrc, staticSrc, testSrc} from './config'
import {buildJs} from './build.javascript'


export function serve () {
    browserSync.create()
    browserSync.init({ server: { baseDir }})
    gulp.watch(jsSrc, ['watch:js'])
    gulp.watch(scssSrc, ['build:sass'])
    gulp.watch(staticSrc, ['build:static'])
    gulp.watch(testSrc, ['test:js'])
}
