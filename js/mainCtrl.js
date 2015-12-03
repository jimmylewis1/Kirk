var app = angular.module('weaveSearch');

app.controller('mainCtrl', function($scope, mainService, Auth){
    
    $scope.login = function() {
        Auth.$authWithOAuthPopup("google").then(function(authData) {
            console.log(authData);
        }).catch(function(error) {
            console.error(error);
        });
    }
    
    $scope.logout = function() {
        Auth.$unauth();
    }
    
    $scope.appointments = function() {
        mainService.getAppts().then(function(response) {
            $scope.appointments = response.data;
        });
    }
    $scope.appointments();
});

