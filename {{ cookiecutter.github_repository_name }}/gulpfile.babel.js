import gulp from 'gulp'
import browserSync from 'browser-sync'

// js
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import concat from 'gulp-concat'

// sass
import autoprefixer from 'gulp-autoprefixer'
import sass from 'gulp-sass'
import minifyCss from 'gulp-minify-css'

const baseDir = './'
const srcDir = `${baseDir}src`
const distDir = `${baseDir}/dist`
const modules = 'ignore'

// initialize browserSync
browserSync.create()


gulp.task('build:js', () => {
   return gulp.src(`${ srcDir }/**/*.js`)
     .pipe(sourcemaps.init())
     .pipe(babel({modules}))
     .pipe(concat('all.js'))
     .pipe(sourcemaps.write('.'))
     .pipe(gulp.dest(distDir))
})

gulp.task('build:sass', () => {
  return gulp.src([`${ srcDir }/**/*.scss`])
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sass())
    .pipe(gulp.dest(distDir))
    .pipe(browserSync.stream())
})

gulp.task('serve', () => {
    browserSync.init({ server: { baseDir }})
    gulp.watch(`${ srcDir }/**/*.js`, ['watch:js'])
    gulp.watch(`${ srcDir }/**/*.scss`, ['build:sass'])
    gulp.watch('./**/*.html', browserSync.reload)
})

gulp.task('watch:js', ['build:js'], browserSync.reload)
gulp.task('build', ['build:js', 'build:sass'])
gulp.task('default', ['build', 'serve'])
