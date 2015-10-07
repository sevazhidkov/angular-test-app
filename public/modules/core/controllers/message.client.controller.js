'use strict';

angular.module('core').controller('MessageController', ['$scope', '$stateParams', '$http',
	function($scope, $stateParams, $http) {
		$scope.sendMessage = function() {
			if ($scope.message.length > 0) {
				$http.post('/users/sendMessage', { message: [$scope.message] })
				       .success(function(response) {
							   $scope.sended = true;
							 })
							 .error(function(error) {
								 console.log(error);
							 });
			}
		};
	}
]);
