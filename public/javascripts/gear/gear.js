'use strict';

angular.module('volumeFour.gear', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gear', {
    templateUrl: '/javascripts/gear/gear.html',
    controller: 'gearCtrl'
  });
}])

.controller('gearCtrl', ['$scope', function($scope) {
	
}]);