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
        uglify: {
            js: {
                files: {
                    'build/js/controllers.min.js' : ['src/js/controllers.js']
                }
            }
        },
        concat: {
            css: {
                files: {
                    'build/css/app.css' : ['build/css/bootstrap.min.css','build/css/bootstrap-theme.min.css','build/css/font-awesome.min.css']
                }
            },
            js: {
                files:{
                    'build/js/app.min.js' : ['build/js/angular.min.js','build/js/angular.sanitize.min.js','build/js/controllers.min.js']
                }
            }
        },
        cssmin: {
            css: {
                files: {
                    'build/css/app.min.css' : ['build/css/app.css'],
                    'src/css/style.min.css' : ['src/css/style.css']
                }
            }
        }
    });

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['uglify','concat','cssmin','imagemin']);
};