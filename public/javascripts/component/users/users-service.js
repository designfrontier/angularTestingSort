angular.module('lfeApp').factory('UsersService',['$resource', function($resource){
    var users = $resource('/users', {id: '@id'}, {
        get: {isArray: true}
    }, { offline: true, encrypt: false});

    return {
        users: users
    };
}]);