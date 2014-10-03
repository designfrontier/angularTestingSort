module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);

  // CONFIG OPTIONS
  var options = {
    jsFiles: [
              '*.js'
              , 'components/**/*.js'
              , 'subsections/**/*.js'
              , '!Gruntfile.js'
              , '!**/*_test.js'
              , '!lib/**'
              , '!node_modules/**'
              , '!config/**'
    ]

    , jshintConfig: {
      force: true
    }

    , karmaConfig: {
      configFile: 'config/karma.conf.js'
    }

    // Grunt tasks
    , config: {
      src: 'config/grunt-tasks/*.js'
    }
  };

  // INIT CONFIG AUTOMATICALLY
  // With 'load-grunt-configs' plugin
  var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);

  grunt.registerTask('lint', ['jshint', 'htmlangular']);
  grunt.registerTask('test', ['karma:continuous']);

  // 'dev' task calls 'watch' which indirectly calls 'karma:unit:run'. This expects to connect to a karma server on port 9100.
  // therefore, be sure to run the karma:unit task in a separate console when running the dev task.
  grunt.registerTask('dev', ['karma:unit','jshint', 'watch']);
};
