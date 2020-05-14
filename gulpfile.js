// gulpfile.js
const { src, dest, watch, series } = require('gulp');

const sass = require("gulp-sass"),
    autoprefixer = require("autoprefixer"),
    sourcemaps = require("gulp-sourcemaps"),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    browserSync = require("browser-sync").create();

const path = {
    src: "assets/",
    dist: "dist/assets/"
};

// Compile sass to css
function styles() {
    return src(path.src + 'styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest(path.dist))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream());
}

// CSS export: compact
function cssbuild() {
    return src(path.dist + '*.css')
        .pipe(autoprefixer())
        .pipe(cssmin({keepBreaks: false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest(path.dist));
}

function reload() {
    browserSync.reload();
}

function watchtask() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch(path.src + 'styles/**/*.scss', styles);
    watch("./*.html").on('change',reload);
}

exports.default = series(styles, watchtask);
exports.styles = styles;
exports.cssbuild = cssbuild;