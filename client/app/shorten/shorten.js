angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, Links) {
  $scope.link = {};
  $scope.addLink = function () {
  	//IF IS A REAL LINK (validated)
    Links.addOne().then(function(data) {
      $scope.link = data;
    });
  };
});

/*
  //check Auth: 
  //Auth.isAuth()
  .then(function(true){ return true;})
  .catch(function(err){ redirect to homepage})
    //can we use $routeprovider ? 

///Code.createCode()
//


*/