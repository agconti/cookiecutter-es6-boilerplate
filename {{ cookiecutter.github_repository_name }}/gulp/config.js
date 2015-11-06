// app config
export const projectName = '{{cookiecutter.github_repository_name}}'
export const modules = 'ignore'

// path config
export const baseDir = './'
export const srcDir = `${baseDir}src`
export const distDir = `${baseDir}/dist`
export const projectDir = `${srcDir}/${projectName}`
export const staticSrc = `${srcDir}/**/*.{html,jpg,png,gif,svg}`
export const staticDist = `${distDir}/**/*.{html,jpg,png,gif,svg}`
export const scssMain = `${srcDir}/main.scss`
export const scssSrc = `${srcDir}/**/*.scss`
export const jsSrc = `${srcDir}/**/*.js`
export const testSrc = `./test/**/*.js`
