'use strict';

angular.module('volumeFour.photos', ['ngRoute', 'ui.bootstrap', 'slick', 'PathService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photos', {
    templateUrl: '/javascripts/photos/photos.html',
  });
}])

.controller('photosCtrl', ['$scope', 'ImageService', function($scope, ImageService) {
	
	$scope.gearSlides = ImageService.getGearPaths().map(function(index){
		return {image: "/javascripts/photos/gear/" + index + ".jpg"}
	});
	$scope.liveSlides = ImageService.getLiveRoomPaths().map(function(index){
		return {image: "/javascripts/photos/live-room/" + index + ".jpg"}
	});
	$scope.controlSlides = ImageService.getControlRoomPaths().map(function(index){
		return {image: "/javascripts/photos/control-room/" + index + ".jpg"}
	}) 
}])




