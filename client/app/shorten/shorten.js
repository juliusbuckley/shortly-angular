angular.module('shortly.shorten', [])
//require utils.js

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.addLink = function (url) {
    Links.addOne(url);
  };
});
