angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, Links) {
  $scope.link = {};
  $scope.addLink = function () {
    Links.addOne().then(function(data) {
      $scope.link = data;
    });
  };
});
