'use strict';

angular.module('volumeFour.booking', ['ngRoute', 'ui.bootstrap', 'VolFourService', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/booking', {
    templateUrl: '/javascripts/booking/booking.html',
    controller: 'bookingCtrl'
  });
}])

.controller('bookingCtrl', ['$scope', '$http', 'EmailService', function($scope, $http, EmailService) {
	
	function clearForm(){
		$scope.emailParts = {
	        firstName: null,
	        lastName: null,
	        email: null,
	        msg: null
		};
	}
	
	$scope.smallScreen = window.innerWidth > 660 ? false : true;
	
	function success(response){
		$scope.message = "Awesome!  Your message has been sent, " + response.data.firstName + "!  Brian or Chris will get back to you soon!";
		$scope.showEmailResult = false;
	}
	function error(){
		$scope.message = "Uh-oh.  Something went wrong.  Please try again later or reach out to one of Brian or Chris directly."
		$scope.showEmailResult = false;
	}
	
	clearForm();
	$scope.showEmailResult = true;
	
	$scope.sendContactEmail = function(emailParts){
		if(emailParts.email.indexOf("@") == -1){
			$scope.message = "Oops!  You did not enter a valid email address.  Please check you have entered your contact email correctly.";
			$scope.showEmailResult = false;
			return;
		}
		EmailService.sendContactEmail(emailParts).then(success, error)
	};
	$scope.submitComplete = function(){
		$scope.showEmailResult = true;
		clearForm();
	}
}]);