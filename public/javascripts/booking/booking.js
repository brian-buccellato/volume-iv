'use strict';

angular.module('volumeFour.booking', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/booking', {
    templateUrl: '/javascripts/booking/booking.html',
    controller: 'bookingCtrl'
  });
}])

.controller('bookingCtrl', [function() {

}]);