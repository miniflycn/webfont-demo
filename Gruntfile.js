module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        webfont: {
            sass: {
                src: 'icons/*.svg',
                dest: 'build',
                options: {
                    stylesheet: 'scss',
                    hashes: false,
                    engine: 'node',
                    types: 'eot,woff,ttf,svg'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('default', ['webfont']);

};