import gulp from 'gulp'
import rimraf from 'rimraf'

import {staticSrc, staticDist, distDir} from './config'


export function cleanStaticDist (callback) {
  rimraf(staticDist, callback)
}


export function buildStatic () {
  return gulp.src(staticSrc)
    .pipe(gulp.dest(distDir))
}
