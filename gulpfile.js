var gulp = require('gulp')
	, mocha = require('gulp-mocha')
    , karma = require('gulp-karma');


gulp.task('testNode', function () {
	gulp.src([
			'routes/*_test.js'
		], {read: false})
		.pipe(mocha({
			reporter: 'spec'
		}));
});

gulp.task('testAngular', function () {
    gulp.src('./bogus.js')
        .pipe(karma({
            configFile: 'config/karma.conf.js'
        })).on('error', function (err) {
            throw err;
        });
});

gulp.task('test',['testNode', 'testAngular'], function () {

});

gulp.task('default', function () {

});
