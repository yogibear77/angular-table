var html = require('./template')

var modulename = module.exports = 'stable'

angular
	.module(modulename, [
    
  ])

  .directive('stableTable', function(){

    return {
      restrict:'EA',
      scope:{
       rows:'=' 
      },
      replace:true,
      template:html,
      controller:function($scope){

      },
      link: function($scope, $elem, $attr) {
        
      }
    }
  })


  