module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['js/*.js']
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'  
        },
        files: {
          'css/main.css': 'scss/main.scss'  
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
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
  grunt.loadNpmTasks('grunt-contrib-watch');
};