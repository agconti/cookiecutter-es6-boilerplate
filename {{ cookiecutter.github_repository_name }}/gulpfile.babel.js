import gulp from 'gulp'
import browserSync from 'browser-sync'

import {buildJs} from './gulp/build.javascript'
import {buildScss} from './gulp/build.scss'
import {buildStatic, cleanStaticDist} from './gulp/build.static'
import {serve} from './gulp/serve'


gulp.task('clean:static:dist', cleanStaticDist)

gulp.task('build:js', buildJs)
gulp.task('build:sass', buildScss)
gulp.task('build:static', ['clean:static:dist'], buildScss)
gulp.task('build', ['build:js', 'build:sass', 'build:static'])

gulp.task('watch:js', ['build:js'], browserSync.reload)
gulp.task('serve', serve)

gulp.task('default', ['build', 'serve'])
