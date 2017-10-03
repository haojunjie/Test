'use strict';
angular.module('app').directive('appCont',['$http',function(){
  return {
    restrict:'A',
    replace:true,
    templateUrl:'view/template/positionList.html'
  };
}]);
