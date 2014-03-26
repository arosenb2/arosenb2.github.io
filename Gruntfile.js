'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/img/',
                        src: ['**/*.png'],
                        dest: 'build/img/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/img/',
                        src: ['**/*.jpg'],
                        dest: 'build/img/',
                        ext: '.jpg'
                    }
                ]
            }
        },
        concat: {
            basic_and_extras: {
                files: {
                    'build/css/style.css' : ['build/css/bootstrap.min.css','build/css/bootstrap-theme.min.css','build/css/font-awesome.min.css'],
                    'build/js/app.js' : ['build/js/angular.min.js','build/js/angular.sanitize.min.js','controllers.min.js']
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'build/js/app.min.js' : ['build/js/app.js']
                }
            }
        },
        cssmin: {
            css: {
                files: {
                    'build/css/app.min.css' : ['build/css/style.css']
                }
            }
        }
    });

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['concat','uglify','cssmin']);
};