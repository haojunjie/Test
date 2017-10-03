'use strict';

angular.module('app', ['ui.router']);

'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  }).state('position',{
     url:'/position:id',
     templateUrl:'view/position.html',
    controller:'positionCtrl'
  }).state('company',{
     url:'/company',
     templateUrl:'view/company.html',
     controller:'companyCtrl'
  });
  $urlRouterProvider.otherwise('main');
}]);

'use strict';
angular.module('app').controller('companyCtrl',['$scope',function(){

  
}])

'use strict';
angular.module('app').controller('mainCtrl', ['$scope', function($scope){
   $scope.list=[
     {
       id:"1",
       comImg:"../../images/1.png",
       company:"abc360",
       reqDes:"外教招聘专员(2018届校招)",
      //  city:"北京"，
       Time:"今天20:17",
       Money:"3k-6k"
     },
     {
       comImg:"../../images/2.png",
       company:"abc360",
      //  city:"北京"，
       reqDes:"外教招聘专员(2018届校招)",
       Time:"今天20:17",
       Money:"3k-6k"
     },
     {
       comImg:"../../images/3.png",
       company:"abc360",
      //  city:"北京"，
       reqDes:"外教招聘专员(2018届校招)",
       Time:"今天20:17",
       Money:"3k-6k"
     },
     {
       comImg:"../../images/4.png",
       company:"abc360",
      //  city:"北京"，
       reqDes:"外教招聘专员(2018届校招)",
       Time:"今天20:17",
       Money:"3k-6k"
     },
     {
       comImg:"../../images/5.jpg",
       company:"abc360",
      //  city:"北京"，
       reqDes:"外教招聘专员(2018届校招)",
       Time:"今天20:17",
       Money:"3k-6k"
     },
   ]
}]);

'use strict';
angular.module('app').controller('positionCtrl',['$scope',function($scope){

}]);

'use strict';
angular.module('app').directive('appFoot',[function(){
  return {
    restrict:'A',
    replace: true,
    templateUrl:'view/template/footer.html'
  };
}]);

'use strict'
angular.module('app').directive('appHead',[function(){
  return {
    restrict:'A',
    replace: true,
    templateUrl:'view/template/head.html'
  };
}]);

'use strict';
angular.module('app').directive('appHeadBar',[function(){
  return {
    restrict:'A',
    replace: true,
    templateUrl:'view/template/headBar.html',
    scope:{
      text:'@'
    },
    link:function($scope){
      $scope.back = function(){
        window.history.back();
      };
    }
  };
}]);

'use strict';
angular.module('app').directive('appCont',['$http',function(){
  return {
    restrict:'A',
    replace:true,
    templateUrl:'view/template/positionList.html'
  };
}]);
