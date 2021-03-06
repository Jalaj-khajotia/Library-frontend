'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
	.directive('headerNotification', [ function() {
		return {
			templateUrl: 'scripts/directives/header/header-notification/header-notification.html',
			restrict: 'E',
			replace: true,
			scope: {},
			controller: function($scope, $cookieStore, $rootScope,$location) {
				$scope.logout = function(){
					$cookieStore.remove('loggedUser');
					$location.path('/login');
				}

			}
		}
	}]);
