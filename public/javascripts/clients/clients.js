'use strict';

angular.module('volumeFour.clients', ['ngRoute', 
			'ngSanitize',
            'com.2fdevs.videogular',
            'com.2fdevs.videogular.plugins.controls',
			"com.2fdevs.videogular.plugins.overlayplay",
            "com.2fdevs.videogular.plugins.poster",
            "com.2fdevs.videogular.plugins.buffering"
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clients', {
    templateUrl: '/javascripts/clients/clients.html',
  });
}])

.controller('clientsCtrl', ['$scope', '$sce', function($scope, $sce) {
	
	var me = this;
	me.API = null;
	
	$scope.setAudio = function(index){
		me.API.stop();
		me.config.sources = me.tracks[index].sources;
		$scope.artist = $scope.songs[index].artist;
		$scope.title = $scope.songs[index].title;
	};	
	
	me.onPlayerReady = function(API){
		me.API = API;
	};
	
	me.tracks = [
		{
			sources: [
				{src: $sce.trustAsResourceUrl('/javascripts/sounds/boyfriend.wav'), type: 'audio/wav'}
			],		
		},
		{
			sources: [
				{src: $sce.trustAsResourceUrl('/javascripts/sounds/caution.wav'), type: 'audio/wav'}
			],
		},
		{
		sources: [
				{src: $sce.trustAsResourceUrl('/javascripts/sounds/closest.wav'), type: 'audio/wav'}
			],
		},
		{
		sources: [
				{src: $sce.trustAsResourceUrl('/javascripts/sounds/revisionist.mp3'), type: 'audio/mpeg'}
			],
		}
	];
	
	me.config = {
		autoHide: false,
		autoHideTime: 3000,
		autoPlay: false,
		sources: me.tracks[0].sources,
		theme: {
			url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
		}
	};
	$scope.songs = [
		{
			index: 0,
			artist: "Screaming Females",
			title: "Boyfriend",
			url: "/javascripts/images/screaming-females.jpg"
		},
		{
			index: 1,
			artist: "Forward To Death",
			title: "Caution Tape",
			url: "/javascripts/images/forward-to-death.jpg"
		},
		{
			index: 2,
			artist: "Degenerics",
			title: "It Hits Closest to the Heart",
			url: "/javascripts/images/degenerics.jpg"
		},
		{
			index: 3,
			artist: "The Measure [SA]",
			title: "Revisionist",
			url: "/javascripts/images/measure.jpg"
		}
	];
	$scope.artist = $scope.songs[0].artist;
	$scope.title = $scope.songs[0].title;
}]);