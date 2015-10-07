'use strict';

angular.module('core').controller('MessageController', ['$scope', '$stateParams', '$http',
	function($scope, $stateParams, $http) {
		$scope.sendMessage = function() {
			console.log($stateParams.id);
			console.log($scope.message);
		};
	}
]);
