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
        }
    });

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['uglify']);
};