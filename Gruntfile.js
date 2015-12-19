module.exports = function(grunt) {
	grunt.initConfig({
	  uglify: {
	    my_target: {
	      files: {
	        'js/site.min.js': ['js/sitejs.js', 'src/modal-template.js']
	      }
	    }
	  }
	});
};