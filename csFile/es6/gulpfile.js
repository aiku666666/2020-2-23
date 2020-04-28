var gulp=require('gulp');
var babel = require("gulp-babel");
var  watch = require("gulp-watch");
gulp.task('js',function(){
    return gulp.src('./src/**/*.js')
            .pipe(babel())
            .pipe(gulp.dest('./dist'))
});
gulp.task('html',function(){
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
})
gulp.task('default',gulp.series('js','html'))
/*gulp.task("watch", function() { // 实时监听
    gulp.watch(['./src/!**!/!*.js','./src/!**!/!*.html'],gulp.series('js','html'));
});

gulp.task('default',gulp.series('watch'))*/
