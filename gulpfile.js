// gulpfile.js
const { src, dest, watch, series } = require('gulp');

const gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("autoprefixer"),
    sourcemaps = require("gulp-sourcemaps");
    cssmin = require('gulp-cssmin');
    rename = require('gulp-rename');
    browserSync = require("browser-sync").create();

const path = {
    src: "assets/",
    dist: "./dist/assets/"
};

// Compile sass to css
function styles() {
    return src(path.src + 'styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest(path.dist))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream())
}

// CSS export: compact
function cssbuild() {
    return src([assetsDev + 'css/*.css', '!'+ assetsDev + 'css/*.min.css'])
        .pipe(cssmin({keepBreaks: true}))
        .pipe(autoprefixer())
        .pipe(dest(assetsProduction + 'css'));
}


function reload() {
    browserSync.reload();
}
 
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.styles.src, style);
    gulp.watch("./*.html").on('change',reload);
    gulp.watch("js/**/*.js").on('change',reload);
}

exports.styles = styles;
exports.watch = watch;