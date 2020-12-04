module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.initConfig({
    jshint: {
      options: {
        esversion: 6
      },
      build: ['utils/test.js']
    }
  });
  grunt.registerTask('default', ['jshint']);
}