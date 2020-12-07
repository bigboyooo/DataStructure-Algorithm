module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-cafe-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.initConfig({
    cafemocha: {
      testThis: {
          src: 'test/add.js',
          options: {
              ui: 'bdd',
              // require: [
              //   'should',
              // ],
          },
      }
    },
    jshint: {
      options: {
        esversion: 6
      },
      build: ['utils/test.js']
    }
  });
  grunt.registerTask('default', ['cafemocha', 'jshint']);
}