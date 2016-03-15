require('es6-promise').polyfill();

var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	processors = [
		require('postcss-import'),
		require('postcss-mixins'),
		require('postcss-simple-vars'),
		require('postcss-nested'),
		//require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] })
	];


gulp.task('css', function(){
	return gulp.src('src/css/h5next.css')
	.pipe(
		postcss(processors)
	)
	.pipe(gulp.dest('dist/styles/'))
})
