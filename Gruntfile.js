module.exports = function(grunt) {
	grunt.initConfig({
	  uglify: {
	    my_target: {
	      files: {
	        'js/site.min.js': ['js/sitejs.js', 'js/modal-template.js']
	      }
	    }
	  },
	  cssmin: {
	    my_target: {
	      files: {
	        'css/site.min.css':['css/styles.css']
	      }
	    }
	  },
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};