/* use strict*/

var app = angular.module("isoScope", []);

app.controller("RangersCtrl", function($scope, $element)
{
	$scope.getMove = function(name, position, movetype, move) 
	{
		console.log('' + name + ' ' + position + ' 	' + movetype + ' ' + move);
	}

	$scope.movetypes = ['Offensive', 'Defensive', 'Neutral'];
	$scope.movetype  = $scope.movetypes[0];
})

.directive('rangers', function()
{
	return {
		restrict: 'E',
		scope: {
			name: "@",
			image: "@",
			position: "@",
			moveType: "=",
			useMove: "&"
		},
		templateUrl: 'partials/rangers.html',
		controller: 'RangersCtrl'
	}
})