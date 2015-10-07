'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http', 'Authentication', 'Users',
	function($scope, $http, Authentication, Users) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		if (Authentication.user !== '') {
			$scope.helloMessage = 'Привет, ' + Authentication.user.displayName;
		} else {
			// TODO: Redirect to login page
		  $scope.helloMessage = 'Необходимо залогиниться или создать аккаунт';
		}

		// Get all users
		$http.get('/users')
		       .success(function(response) {
						 $scope.users = response;
					 });
	}
]);
