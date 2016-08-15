module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['./js/*.js']
        },

        uglify: {
            my_target: {
                files: {
                    './js/challenge.min.js': './js/challenge.js'
                }
            }
        },

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    './css/c0.css': './scss/c0.scss'
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['./css/c0.css', '!*./min.css'],
                    ext: '.min.css'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['./*.html', './scss/*.scss'],
                tasks: ['uglify', 'sass', 'cssmin', 'watch'],
                options: {
                    event: 'all'
                }
            }
        },


        browserSync: {
            bsFiles: {
                src: [
                    'css/*.css',
                    './*.html'
                ]
            },
            options: {
                port: 8000,
                watchTask: true,
                server: {
                    baseDir: './'
                }
            }
        }

    });



    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'sass', 'browserSync', 'watch']);


};