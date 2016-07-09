angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  //addOne needs to happen on a form submit. 
  //When we post, a new link "addOne"
  //when we "addOne we need to dynamically append to our div"
  //temp $scope.link = user
  $scope.data = {};

  //set scopedatalinks to the result of the getAll funtion.
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });



/*
  //intercept link before POST:
  //add code!
  //check Auth: 
  //Auth.isAuth()
    //can we use $routeprovider ? 
*/
  // $scope.auth = function () {
  // //use isAuth function to check that the usr is authorize
  // //otherwise reroute them to the sigin page
  //   if (Auth.isAuth()) {
  //       //allow submission of link-to-shorten
  //   } else {
  //     $location.path('/signin');
  //   }
  // };

  // $scope.validate = function () {

  // };


});
 