'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http', '$location', 'Authentication', 'Users',
	function($scope, $http, $location, Authentication, Users) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		if (Authentication.user !== '') {
			$scope.helloMessage = 'Привет, ' + Authentication.user.displayName;
		} else {
		  $location.path('/signin');
		}

		// Get all users
		$http.get('/users')
		       .success(function(response) {
						 $scope.users = response;
					 });
	}
]);
