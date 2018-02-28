//The "wrapper" function
module.exports = function(grunt) {
  
	//Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		* Grunt Sass
		* Compile Sass to CSS using node-sass
		* https://www.npmjs.com/package/grunt-sass
		*/
		sass: {

			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'builds/bootstrap/css/styles.css': 'builds/bootstrap/assets/scss/styles.scss'
				}
			}
		},

		/**
		* Grunt Contrib Watch
		* Monitor files and excute tasks
		* https://www.npmjs.com/package/grunt-contrib-watch
		*/
		watch: {
			sass: {

				files: [
					'builds/bootstrap/assets/scss/**/*.scss'
				],
				tasks : [
					'sass'
				],
				options: {
					livereload: true,
				}
			},
			scripts: {

				files: [
					'builds/bootstrap/assets/js/*.js'
				],
				tasks : [
					'uglify'
				]
			}
		},

		/**
		* Grunt Contrib Uglify
		* Minify JavaScript files
		* https://www.npmjs.com/package/grunt-contrib-uglify
		*/
		uglify: {
			my_target:{
				files: {
					'builds/bootstrap/js/scripts.js': ['node_modules/jquery/dist/jquery.js', 'builds/bootstrap/assets/js/scripts.js']
				}
			}
		}


	});

	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

	//Custom tasks
	grunt.registerTask('default', ['watch']);

};
