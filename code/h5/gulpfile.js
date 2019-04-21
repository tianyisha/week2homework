const gulp = require('gulp');
const server = require('gulp-webserver');
gulp.task('webserver', () => {
    return gulp.src('./src/')
        .pipe(server({
            port: 8087,
            open: true,
            livereload: true,
            proxies: [{
                    "source": "/api/getUserOne",
                    "target": "http://localhost:3000/api/getUserOne"
                },
                {
                    "source": "/api/getUserContentOne",
                    "target": "http://localhost:3000/api/getUserContentOne"
                }
            ]
        }))
})