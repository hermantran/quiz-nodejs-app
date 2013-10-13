module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['public/js/**/*.js', '!public/js/main.min.js', '!public/js/libs/**/*']
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'  
        },
        files: {
          'public/css/style.min.css': 'scss/main.scss'  
        }
      }
    },
    
    requirejs: {
      compile: {
        options: {
          name: "main",
          baseUrl: "public/js/",
          mainConfigFile: "public/js/main.js",
          out: "public/js/main.min.js"
        }
      }
    },
    
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
};