'use strict';

angular.module('volumeFour', [
  'ngRoute',
  'volumeFour.about',
  'volumeFour.gear',
  'volumeFour.photos',
  'volumeFour.clients',
  'volumeFour.booking'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/about'});
}]);
