import gulp from 'gulp'
import browserSync from 'browser-sync'

import autoprefixer from 'gulp-autoprefixer'
import sass from 'gulp-sass'
import minifyCss from 'gulp-minify-css'

import {scssMain, distDir} from './config'


export function buildScss () {
  return gulp.src(scssMain)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.stream())
}
