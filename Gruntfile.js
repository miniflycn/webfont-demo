module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        webfont: {
            sass: {
                src: 'icons/*.svg',
                dest: 'build',
                options: {
                    stylesheet: 'sass',
                    hashes: false,
                    engine: 'node'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('default', ['webfont']);

};