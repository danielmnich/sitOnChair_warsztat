const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const colors = require('ansi-colors');
const browserSync = require('browser-sync').create();
const wait = require('gulp-wait');
const notifier = require("node-notifier");


function showError(err) {
    notifier.notify({
        title: 'Error in sass',
        message: err.messageFormatted
    });

    console.log(colors.red('==============================='));
    console.log(colors.red(err.messageFormatted));
    console.log(colors.red('==============================='));
    this.emit('end');
}


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false, //czy pokazywać tooltipa
        //host: "192.168.0.24", //IPv4 Address Wirless LAN adapter WiFi from ipconfig
        //port: 3000, //port na którym otworzy
        //browser: "google chrome" //jaka przeglądarka ma być otwierana - zaleznie od systemu - https://stackoverflow.com/questions/24686585/gulp-browser-sync-open-chrome-only
    });
});


gulp.task('sass', function() {
    return gulp.src('./scss/main.scss')
        .pipe(wait(500))
        .pipe(plumber({
            errorHandler : showError
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' //nested, expanded, compact, compressed
        }))
        .pipe(autoprefixer({
            browsers: ['> 5%'] //https://github.com/browserslist/browserslist#full-list
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});


gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload); //kompilacji nie robimy, reagujemy tylko na zmiany
});


gulp.task('default', function() {
    console.log(colors.bold(colors.yellow('----- rozpoczynam pracę -----')));
    gulp.start(['browser-sync', 'sass', 'watch']);
});