var gulp = require('gulp')
	, mocha = require('gulp-mocha')
  , karma = require('gulp-karma')
  , jshint = require('gulp-jshint');


// gulp.task('testNode', function () {
// 	gulp.src([
// 			'routes/*_test.js'
// 		], {read: false})
// 		.pipe(mocha({
// 			reporter: 'spec'
// 		}));
// });

gulp.task('testAngular', function () {
    gulp.src('./bogus.js')
        .pipe(karma({
            configFile: 'config/karma.conf.js'
        })).on('error', function (err) {
            throw err;
        });
});

gulp.task('lint', function() {
    gulp.src([
              '*.js'
              , 'components/**/*.js'
              , 'subsections/**/*.js'
              , '!Gruntfile.js'
              , '!**/*_test.js'
              , '!lib/**'
              , '!node_modules/**'
              , '!config/**'
            ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test',['lint','testAngular'], function () {

});

gulp.task('default', function () {

});
