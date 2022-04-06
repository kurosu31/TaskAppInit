const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css');



    mix.ts('resources/ts/app.tsx', 'public/js')
    .version()
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [
            require('postcss-flexbugs-fixes')(),
            require('autoprefixer')({
                grid: true
            }),
        ],
    })
    .browserSync({
        files: [
            "resources/views/**/*.blade.php",
            "public/**/*.*"
        ],
        proxy: {
            target: 'http://localhost:8000',
        }
    });
