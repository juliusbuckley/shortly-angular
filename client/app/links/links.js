angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  //addOne needs to happen on a form submit. 
  //When we post, a new link "addOne"
  //when we "addOne we need to dynamically append to our div"
  //temp $scope.link = user
  $scope.data = {
    links: []
  };

/*
  //intercept link before POST:
  //add code!
  //check Auth: 
  //Auth.isAuth()
  .then(function(true){ return true;})
  .catch(function(err){ redirect to homepage})
    //can we use $routeprovider ? 
*/
  //set scopedatalinks to the result of the getAll funtion.
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });
});
 