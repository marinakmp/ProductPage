// gulpfile.js
var gulp = require("gulp");
var sass = require("gulp-sass");

var paths = {
    styles: {
        src: "styles/**/*.sass",
        dest: "styles"
    }
};

var browserSync = require("browser-sync").create();
 
function style() {
    return (
        gulp
            .src(paths.styles.src)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
            // Add browsersync stream pipe after compilation
            .pipe(browserSync.stream())
    );
}

exports.style = style;

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
    gulp.watch("path/to/html/*.html", reload);
}

exports.watch = watch



var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");