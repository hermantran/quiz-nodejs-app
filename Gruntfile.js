module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: [
        '**/*.js',
        '!.tmp/**/*.js',
        '!node_modules/**/*.js',
        '!assets/js/lib/**/*',
        '!assets/js/sails.io.js',
        '!assets/js/socket.io.js'
      ]
    },
    
    sass: {
      dist: {
        options: {
          style: 'compressed'  
        },
        files: {
          '.tmp/public/styles/main.min.css': 'assets/styles/scss/main.scss'  
        }
      }
    },
    
    browserify: {
      dist: {
        files: {
          '.tmp/public/js/main.js': ['assets/js/app.js']
        }
      }
    },
    
    watch: {
      scss: {
        files: 'assets/styles/**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['buildJs']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  
  grunt.registerTask('buildJs', ['jshint', 'browserify']);
  grunt.registerTask('default', ['buildJs', 'sass']);
};