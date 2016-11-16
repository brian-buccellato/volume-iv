'use strict';

angular.module('volumeFour.booking', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/booking', {
    templateUrl: '/javascripts/booking/booking.html',
    controller: 'bookingCtrl'
  });
}])

.controller('bookingCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.emailParts = {
        firstName: null,
        lastName: null,
        email: null,
        msg: null
	};
	
	$scope.sendContactEmail = function(emailParts){
		
		var data = (emailParts);
		
		$http.post('/contact-form', data)
			.success(function(data, status, headers, config){
				//your message was sent, thanks etc
			})
			.error(function(data, status, headers, config){
				console.log(data);
			})
	}
}]);