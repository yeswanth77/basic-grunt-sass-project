/*!
 * Basic Grunt project that builds Sass and compresses it, concatenates Javascript and compresses it and also optimizes images using Smushit.
 * http://www.icreatehosting.co.za
 * @author Francois La Cock
 */

'use strict';

/**
 * Grunt module
 */
module.exports = function (grunt) {

  /**
   * Dynamically load npm tasks
   */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /**
   * Grunt config
   */
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /**
     * Set project info
     */
    project: {
      src: 'src',
      css: [
        '<%= project.src %>/scss/style.scss'
      ],
      js: [
        '<%= project.src %>/js/*.js'
      ]
    },

    /**
     * Project banner
     * Dynamically appended to CSS/JS files
     * Inherits text from package.json
     */
    tag: {
      banner: '/*!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    /**
     * Concatenate JavaScript files
     * https://github.com/gruntjs/grunt-contrib-concat
     * Imports all .js files and appends project banner
     */
    concat: {
      dev: {
        files: {
          '../js/scripts.min.js': '<%= project.js %>'
        }
      },
      options: {
        stripBanners: true,
        nonull: true,
        banner: '<%= tag.banner %>'
      }
    },

    /**
    * Uglify (minify) JavaScript files
    * https://github.com/gruntjs/grunt-contrib-uglify
    * Compresses and minifies all JavaScript files into one
    */
    uglify: {
      options: {
        banner: '<%= tag.banner %>'
      },
      dist: {
        files: {
          '../js/scripts.min.js': '<%= project.js %>'
        }
      }
    },

    /**
     * Compile Sass/SCSS files
     * https://github.com/gruntjs/grunt-contrib-sass
     * Compiles all Sass/SCSS files and appends project banner
     */
    sass: {
      dev: {
        options: {
          banner: '<%= tag.banner %>',
          style: 'expanded'
        },
        files: {
          '../css/styles.min.css': '<%= project.css %>'
        }
      },
      build: {
        options: {
          banner: '<%= tag.banner %>',
          style: 'compressed'
        },
        files: {
          '../css/styles.min.css': '<%= project.css %>'
        }
      }
    },

    /**
    Optimizes all images for Google Page Speed
    **/

    smushit: {
      mygroup: {
        src: ['../images/**/*.png','../images/**/*.jpg','../images/**/*.gif'],
        dest: '../test/'
      }
    },

    /**
     * Runs tasks against changed watched files
     * https://github.com/gruntjs/grunt-contrib-watch
     * Watching development files and run concat/compile tasks
     */
    watch: {
      concat: {
        files: '<%= project.src %>/js/{,*/}*.js',
        tasks: ['concat:dev']
      },
      sass: {
        files: '<%= project.src %>/scss/{,*/}*.{scss,sass}',
        tasks: ['sass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-smushit');

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'sass:dev',
    'concat:dev',
    'watch'
  ]);

  /**
   * Build task
   * Run `grunt build` on the command line
   * Then compress all JS/CSS files and optimize images
   */
  grunt.registerTask('build', [
    'sass:build',
    'concat:dev',
    'uglify',
    'smushit',
    'watch'
  ]);
};