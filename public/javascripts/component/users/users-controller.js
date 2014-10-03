angular.module('lfeApp').controller('UsersCtrl',['UsersService', '$scope', 
    function(UsersService, $scope){
        'use strict';
        
        $scope.mainTopic = {};

        $scope.users = UsersService.users;
        $scope.userList = $scope.users.get();

        $scope.showUser = function (user) {
            $scope.currentUser = user;
        };
}]);