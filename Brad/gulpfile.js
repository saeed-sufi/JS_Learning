const { series } = require('gulp')
var gulp = require('gulp'),
  watch = require('gulp-watch'),
  broweserSync = require('browser-sync').create();

gulp.task('watch', function () {

  broweserSync.init({
    notify: false,
    server: {
      index: 'todo.html'
    }
  })

  watch(['*.js', 'todo.html'], () => broweserSync.reload())
  
})