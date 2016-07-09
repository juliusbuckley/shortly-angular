angular.module('shortly.services', [])

.factory('Links', function ($http) {
  //retreive all links
  var getAll = function () {
    return $http({
      method: 'GET',
      url: '/api/links'
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
      data: JSON.stringify(link)
    })
    .then(function(resp) {
      return resp;
    });
  };
  //we might 
  return {
    getAll: getAll,
    addOne: addOne
  };
})

.factory('Valid', function () {

  var validateLink = function () {

  };

  var validateUser = function () {

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


//     DO WE NEED THIS? (from link model --deploy)
// urlsSchema.pre('save', function (next) {
//   var shasum = crypto.createHash('sha1');
//   shasum.update(this.url);
//   console.log('this', this);
//   this.code = shasum.digest('hex').slice(0, 5);
//   console.log('this.code', this.code);
//   next();


//   & OR THIS? 

//   exports.fetchUrls = function(req, res) {
//   ////retrieve the urls
//   //then send back a status
//   //  Url.find({}).exec(function(err,found) {});
//   Link.reset().exec(function(err, links) {
//     if (err) {
//       res.status(500);
//     }
//     res.status(200).send(links);
//   });
// };

// exports.saveLink = function(req, res) {
//   var uri = req.body.url;

//   if (!util.isValidUrl(uri)) {
//     console.log('Not a valid url: ', uri);
//     return res.sendStatus(404);
//   }

