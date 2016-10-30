'use strict';

angular.module('volumeFour.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/javascripts/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', [function() {

}]);