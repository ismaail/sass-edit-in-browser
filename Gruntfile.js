/*jshint strict:true, browser:true, jquery:true, devel:true, curly:true, eqeqeq:true, immed:true, latedef:true, plusplus:true, undef:true, unused:true, laxbreak:true, nonew:false */
/*global module */

module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		compass: {
			dist: {
				options: {
					httpPath: '/',
					sassDir: 'scss',
					cssDir: 'public/css',
					sourcemap: true,
					watch: true
				}
			}
		},
		watch: {
			scss: {
				files: ['scss/**'],
				tasks: ['compass'],
				options: {
					interrupt: true
				}
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask("default", []);
};
