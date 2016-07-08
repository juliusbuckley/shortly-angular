angular.module('shortly.services', [])

.factory('Links', function ($http) {
  //retreive all links
  var getAll = function () {
    return $http({
      method: 'GET',
      title: 'title',
      url: '/api/links',
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  //adding a new link to the usrbase
  var addOne = function (link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    })
    .then(function(resp) {
      return resp;
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
})

.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };
//takes in http mtd from http and adds a token to the resp.data:(*USER*)
  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };
//how is this related to the prev two lines? 
  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});

