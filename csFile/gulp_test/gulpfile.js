var gulp=require('gulp');
var concat =require('gulp-concat');
var uglify =require('gulp-uglify');
var rename =require('gulp-rename');
var less=require('gulp-less');
var cssClean=require('gulp-clean-css');
var htmlMin=require('gulp-htmlmin');
var livereload= require('gulp-livereload');
var connect= require('gulp-connect'); //自带微型浏览器的插件
var open=require('open');
 //注册任务
/*gulp.task('任务名',function(){
    //将任务代码放这里
});*/
/*gulp认为如果没有调用到的函数在压缩文件的适合不会合并，但是不是压缩的就会展示*/
//合并2个js文件
gulp.task('js',function () {
    return gulp.src('src/js/*.js') //如果要深层的js也都合并的话就要gulp.src('src/js/**/*.js')
        .pipe(concat('build.js')) //pipe相当与管道通道 .concat 合并文件名（临时名字）
        .pipe(gulp.dest('dist/js/'))   //gulp.dest 输出本地文件位置
        .pipe(uglify())              //压缩文件
        .pipe(rename({suffix:'.min'}))   // 压缩文件重命名  suffix 后缀名也可以直接写名字
        .pipe(gulp.dest('dist/js/'))           //输出文件
        .pipe(livereload())              //实时更新
        .pipe(connect.reload())        //全自动实时更新
})
//编译less任务和合并css
gulp.task('less',function(){
    return gulp.src('src/less/*.less')
        .pipe(less())//编译less
        .pipe(gulp.dest('src/css/')) //编译后的less放到css文件上在合并
        .pipe(livereload())              //实时更新
        .pipe(connect.reload())        //全自动实时更新

})
//css合并和压缩
gulp.task('css',function(){
    return gulp.src('src/css/*.css')
        .pipe(concat('build.css'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(cssClean({compatibility: 'ie8'})) //compatibility兼容浏览器版本
        .pipe(rename({suffix: ".min"})) //rename和cssClean顺序是可以调换的
        .pipe(gulp.dest('dist/css/'))
        .pipe(livereload())              //实时更新
        .pipe(connect.reload())        //全自动实时更新
});
//html压缩任务
gulp.task('html',function () {
    return gulp.src('index.html')
        .pipe(htmlMin({collapseWhitespace: true})) //collapseWhitespace清除空格
        .pipe(gulp.dest('dist/'))
        .pipe(livereload())              //实时更新
        .pipe(connect.reload())        //全自动实时更新
})
/*gulp.task('my-task',gulp.series('a'))*/


//注册监视任务(半自动)
gulp.task('watch',function(){
    //开启监听
    livereload.listen()
    //确认监听的目标以及绑定相应的任务
    /*gulp.watch('src/js/!*.js',gulp.series('js'));*/
    gulp.watch(['src/js/*.js','src/less/*.less','src/css/*.css','index.html'],gulp.series('js','less','css','html'));
});

//注册监视任务(全自动)
gulp.task('server',function () {
    //配置服务器的选项
    connect.server({
        root:'dist/', //输出根目录
        livereload:true, //实时刷新
        port:5000 //端口号
    });
    //open可以自动打开指定链接
    open('http://localhost:5000/');

    gulp.watch(['src/js/*.js','src/less/*.less','src/css/*.css','index.html'],gulp.series('js','less','css','html'));
})

//注册默认任务（为了执行多个任务，里面放置的就是上面的任务）
// gulp.task('default',['上面的任务名']) gulp3.0写法
// gulp.task('default',gulp.series.('上面的任务名')s) gulp4.0写法 gulp.parallel
gulp.task('default',gulp.series('js','less','css','html'))



//执行方式 gulp "任务名"
