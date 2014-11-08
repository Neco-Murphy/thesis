angular.module('App.Auth', [])

.factory('Auth', function ($http, $location, $window) {

  var login = function (user) {
    return $http({
      method: 'POST',
      url: '========add later===========',
      data: user
    })
    .then(function (response) {
      return response.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '========add later===========',
      data: user
    })
    .then(function (response) {
      return response.data.token;
    });
  };

  var loggedIn = function () {
    return !!$window.localStorage.getItem('loggedIn');
  };

  var logout = function () {
    $window.localStorage.removeItem('loggedIn');
    $location.path('/login');
  };


  return {
    login: login,
    signup: signup,
    loggedIn: loggedIn,
    logout: logout
  };
});