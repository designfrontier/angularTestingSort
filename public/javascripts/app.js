/* Declare app module that has dependency on ngResource */
angular.module('lfeApp', ['ngResource', 'ngRoute'])
        .config(['$routeProvider', function($routeProvider, $locationProvider, $provide, $httpProvider){
            
        }])
        .run(function($rootScope, $location){});
