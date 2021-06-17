const { src,dest,watch,series } = require('gulp')
const sass = require('gulp-sass')
const svgSprite = require('gulp-svg-sprites')
// const imagemin = require('gulp-imagemin')
// const pngquant = require('imagemin-pngquant')
// const del = require('del')
// const spritesmith = require('gulp.spritesmith')
// const concat = require('gulp-concat')
// const minify = require('gulp-minify')
// const cssmin = require('gulp-cssmin')
    

function styles(cb) {
    return src('src/sass/style.scss')
    	.pipe(sass({outputStyle: 'compact'}).on('error',sass.logError))
        .pipe(dest('src/css'))
        
    cb();
}

function svg(cb) {
    return src('src/images/svg/*.svg')
    .pipe(svgSprite({
        mode: 'symbols',
        svg: {
            svgPath: "../svg/svg/%f"
        }
    }))
    .pipe(dest("src/svg"));

    cb();
}



exports.svg = svg;
exports.styles = styles;
exports.default = function() {
    watch('src/sass/**/*.scss', styles);
    watch('src/images/svg/*.svg', svg);
};

