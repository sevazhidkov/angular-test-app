'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		if (Authentication.user != '') {
			$scope.helloMessage = 'Привет, ' + Authentication.user.displayName;
		} else {
			// TODO: Redirect to login page
			$scope.helloMessage = 'Необходимо залогиниться или создать аккаунт';
		}
	}
]);
