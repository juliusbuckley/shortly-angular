angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  //addOne needs to happen on a form submit. 
  //When we post, a new link "addOne"
  //when we "addOne we need to dynamically append to our div"
  //temp $scope.link = user
  $scope.data = {
    links: []
  };
  //set scopedatalinks to the result of the getAll funtion.
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });
});
 