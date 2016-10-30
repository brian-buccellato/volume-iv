'use strict';

angular.module('volumeFour.photos', ['ngRoute', 'ui.bootstrap', 'slick'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photos', {
    templateUrl: '/javascripts/photos/photos.html',
  });
}])

.controller('photosCtrl', ['$scope', '$uibModal', function($scope, $uibModal) {
	
	$scope.gearSlides = [
		{
			image: "/javascripts/photos/gear/393.jpg"
		},
		{
			image: "/javascripts/photos/gear/413.jpg"
		},
		{
			image: "/javascripts/photos/gear/417.jpg"
		},
		{
			image: "/javascripts/photos/gear/424.jpg"
		},
		{
			image: "/javascripts/photos/gear/425.jpg"
		},
		{
			image: "/javascripts/photos/gear/428.jpg"
		},
	];
	
}])

