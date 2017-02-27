angular.module('VolFourService', [])

.factory('ImageService', [function ImageService(){
	function getGearPaths(){
		return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '393', '413', '415', '417', '424', '425', '428']
	}
	function getControlRoomPaths(){
		return ['1', '2', '3', '4', '5', '6', '7', '8', '9']
	}
	function getLiveRoomPaths(){
		return ['1', '2', '3', '4', '5', '6', '7', '8', '9']
	}
	
	return {
		getGearPaths: getGearPaths,
		getControlRoomPaths: getControlRoomPaths,
		getLiveRoomPaths: getLiveRoomPaths
	};
}])

.factory('EmailService', ['$http', function EmailService($http){
	function sendContactEmail(email_parts){
		return $http.post('/contact-form', email_parts)
	}
	
	return {
		sendContactEmail: sendContactEmail
	}
}])