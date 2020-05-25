// gulpfile.js
const { src, dest, watch, series } = require('gulp');

const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require("gulp-sourcemaps");
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const browserSync = require("browser-sync").create();

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
    return src(path.dist + '*.css') // TODO Exclude minified files
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