angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, Links) {
  $scope.link = {};
  $scope.addLink = function (url) {
    Links.addOne(url);
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

// Links.addOne.then(function(data) {
//       console.log('data', data);
//       $scope.link = data;
//     });
//   };