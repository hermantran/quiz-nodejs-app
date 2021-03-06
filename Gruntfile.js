module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: './assets',
            src: ['**/*.!(coffee)'],
            dest: '.tmp/public'
          }
        ]
      }
    },
    
    clean: {
      dist: {
        src: [
          '.tmp/public/styles/*',
          '.tmp/public/js/*',
          '!.tmp/public/styles/dist/**',
          '!.tmp/public/js/dist/**'
        ]
      }
    },
    
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        '**/*.js',
        '!.tmp/**/*.js',
        '!node_modules/**/*.js',
        '!assets/js/dist/**/*.js',
        '!assets/js/socket.io.js',
        '!assets/js/sails.io.js'
      ]
    },
    
    sass: {
      dist: {
        options: {
          style: 'compressed'  
        },
        files: {
          'assets/styles/dist/main.min.css': 'assets/styles/scss/main.scss'  
        }
      }
    },
    
    browserify: {
      dist: {
        files: {
          'assets/js/dist/main.js': ['assets/js/app.js']
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'assets/js/dist/main.min.js': ['assets/js/dist/main.js']
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('buildJs', [
    'jshint:files', 
    'browserify:dist',
    'uglify:dist',
    'copy:dist'
  ]);

  grunt.registerTask('compileAssets', [
    'sass:dist',
    'buildJs',
    'clean:dist'
  ]);
    
  grunt.registerTask('default', [
    'compileAssets'
  ]);
};