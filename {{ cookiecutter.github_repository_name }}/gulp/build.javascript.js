import gulp from 'gulp'
import changed from 'gulp-changed'

import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'

import {logError} from './utils'
import {jsSrc, distDir, modules} from './config'


export function buildJs () {
  return gulp.src(jsSrc)
    .pipe(changed(distDir))
    .pipe(sourcemaps.init())
    .pipe(babel({modules}).on('error', logError))
    .pipe(concat('all.min.js'))
    .pipe(uglify().on('error', logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(distDir))
}
