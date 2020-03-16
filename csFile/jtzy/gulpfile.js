var gulp=require('gulp');
var assetRev=require('gulp-asset-rev');
var rev=require('gulp-rev');
var revCollector=require('gulp-rev-collector');
var cssSrc = './src/css/**/*.css',
    jsSrc = './src/js/**/*.*',
    contentSrc = './src/html/**/*.html';
//css
gulp.task('css', function () {
    return gulp.src(cssSrc)
            .pipe(rev())
            .pipe(gulp.dest('../lskq/css'))
            .pipe(rev.manifest({ meger: true }))
            .pipe(gulp.dest('./dist/css'))
});
//js
gulp.task('js', function () {
    return gulp.src(jsSrc)
            .pipe(rev())
            .pipe(gulp.dest("../lsk/js"))
            .pipe(rev.manifest({ meger: true }))
            .pipe(gulp.dest('./dist/js'))
});
//html
/*gulp.task('content', function () {
    return gulp.src(contentSrc)
            .pipe(rev())
            .pipe(gulp.dest("./dist/html"))
            .pipe(rev.manifest({ meger: true }))
            .pipe(gulp.dest('./dist/html'))
});*/
//根据json配置信息生成全新html
gulp.task('revHtml', function () {
    return gulp.src(['./dist/js/*.json', './dist/css/*.json', './src/**/*.html'])
        .pipe(revCollector({ replaceReved: true }))
        .pipe(gulp.dest('../lsk/'));
});
//执行
/*gulp.task('default', function (done) {
    condition = false;
    runSequence(
        ['css','js','content','revHtml'],
        done);
});*/
gulp.task('default',gulp.series('css','js','revHtml'))
