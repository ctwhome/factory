// File: Gulpfile.js
'use strict'

/**
 * Settings App
 */
var appPath = 'app/'
var settings = {
  compass: {
    mainSass  : appPath + 'scss/styles.scss',
    allStyles : appPath + '**/*.scss',
    dest      : appPath + 'css',                    // It will generate the same name than the source
    // Compass options
    sourcemap : true,
    style     : 'compressed',                       // Styles: nested, expanded, compact, or compressed
    css       : appPath + 'css',
    sass      : appPath + 'styles',
    image     : appPath + 'images',
    fonts     : appPath + 'css/fonts',
    temp      : appPath + 'css'
  },
  scripts: {
    src       : appPath + 'assets/js/*.js',
    dest      : 'app.min.js',
    folderDest: appPath + 'assets/js'
  },
  server : {
    host      : "0.0.0.0",
    port      : "9000"
  }
}

/**
 * Requires
 */
var gulp      = require('gulp'),
    gutil     = require('gulp-util'),

    path      = require('path'),
    connect   = require('gulp-connect'),
    opn       = require('opn'),                        // Open Browser

    compass   = require('gulp-compass'),
    glob      = require('glob'),
    minifyCss = require('gulp-minify-css'),

    jshint    = require('gulp-jshint'),
    stylish   = require('jshint-stylish'),

    inject    = require('gulp-inject'),
    wiredep   = require('wiredep').stream,

    gulpif    = require('gulp-if'),
    useref    = require('gulp-useref'),                 // Concat js and css refered in index.html   https://www.npmjs.com/package/gulp-useref

    uglify    = require('gulp-uglify'),
    uncss     = require('gulp-uncss'),                  // Delete classes not used.
    plumber   = require('gulp-plumber'),
    templateCache       = require('gulp-angular-templatecache'),
    angularFilesort     = require('gulp-angular-filesort'),
    historyApiFallback  = require('connect-history-api-fallback');

// Dev server
gulp.task('server', ['openbrowser'], function() {
  connect.server({
    root: './app',
    hostname: settings.server.host,
    port: settings.server.port,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});

// Servidor web para probar el entorno de producción
gulp.task('server-dist', function() {
  connect.server({
    root: './dist',
    hostname: settings.server.host,
    port: settings.server.port,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});

/*
 * Open browser
 */
gulp.task('openbrowser', function() {
  opn( 'http://' + settings.server.host + ':' + settings.server.port );
});

// Preprocesa archivos Stylus a CSS y recarga los cambios
gulp.task('compass', function() {
  gulp.src(settings.compass.mainSass)
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(compass({
      sourcemap: settings.compass.sourcemap,
      style : settings.compass.style,
      css: settings.compass.css,
      sass: settings.compass.sass,
      image: settings.compass.image,
      comments: false
    }))
    .on('error', function(err) {
      // Would like to catch the error here
      console.log(err);
    });
     gulp.src(settings.compass.dest)
    .pipe(connect.reload());

});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function() {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});


/**
* jshint
*/
// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// Busca en las carpetas de estilos y javascript los archivos
// para inyectarlos en el index.html
gulp.task('inject', function() {
  return gulp.src('index.html', {cwd: './app'})
    .pipe(inject(
      gulp.src(['./app/scripts/**/*.js']).pipe(angularFilesort()), {
      read: false,
      ignorePath: '/app'
    }))
    .pipe(inject(
      gulp.src(['./app/stylesheets/**/*.css']), {
        read: false,
        ignorePath: '/app'
      }
    ))
    .pipe(gulp.dest('./app'));
});

// Inyecta las librerias que instalemos vía Bower
gulp.task('wiredep', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: './app'
    }))
    .pipe(gulp.dest('./app'));
});

// Compila las plantillas HTML parciales a JavaScript
// para ser inyectadas por AngularJS y minificar el código
gulp.task('templates', function() {
  gulp.src('./app/views/**/*.html')
    .pipe(templateCache({
      root: 'views/',
      module: 'app.views',
      standalone: true
    }))
    .pipe(gulp.dest('./app/scripts'));
});

// Comprime los archivos CSS y JS enlazados en el index.html
// y los minifica.
gulp.task('compress', function() {
  gulp.src('./app/index.html')
    .pipe(useref.assets())
    .pipe(gulpif('*.js', uglify({mangle: false })))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('./dist'));
});


// Copia el contenido de los estáticos e index.html al directorio
// de producción sin tags de comentarios
gulp.task('copy', function() {
  gulp.src('./app/index.html')
    .pipe(useref())
    .pipe(gulp.dest('./dist'));

    gulp.src('./app/styles/fonts/fontawesome/fonts/**').pipe(gulp.dest('./dist/fonts'));
    gulp.src('./app/styles/fonts/glyphicons/**').pipe(gulp.dest('./dist/font'));
    gulp.src('./app/styles/fonts/linecons/font/**').pipe(gulp.dest('./dist/font'));
    gulp.src('./app/styles/fonts/meteocons/font/**').pipe(gulp.dest('./dist/font'));
    gulp.src('./app/styles/fonts/elusive/font/**').pipe(gulp.dest('./dist/font'));

    gulp.src('./app/views/**')
        .pipe(gulp.dest('./dist/views'));

    gulp.src('./app/assets/images/**')
        .pipe(gulp.dest('./dist/assets/images'));
});

// Elimina el CSS que no es utilizado para reducir el peso del archivo
gulp.task('uncss', function() {
    gulp.src('./app/css/styles.css')
        .pipe(uncss({
            html: glob.sync('./app/**/*.html')
        }))
        .pipe(gulp.dest('./dist/css'));
});

// gulp.task('tiny', function(next) {
//   server.listen(35729, function() {
//     gutil.log('Server listening on port: ', gutil.colors.magenta(port));
//     next();
//   });
// });

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
  gulp.watch(['./app/**/*.html'], ['html', 'templates']);
  gulp.watch(['./app/**/*.scss'], ['compass']);
  // gulp.watch([settings.compass.allStyles], ['compass']);
  // gulp.watch(['./app/stylesheets/**/*.styl'], ['compass', 'inject']);
  // gulp.watch(['./app/scripts/**/*.js', './Gulpfile.js'], ['jshint', 'inject']);
  gulp.watch(['./bower.json'], ['wiredep']);
});

//gulp.task('default', ['server', 'templates', 'inject', 'wiredep', 'watch']);
gulp.task('default', ['server', 'watch']);
//gulp.task('build', ['templates', 'compress', 'copy', 'uncss']);
gulp.task('build', ['templates', 'compress', 'copy']);
