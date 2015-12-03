var app = angular.module('weaveSearch');

app.controller('mainCtrl', function($scope, mainService, Auth){
    
    $scope.appointments = function() {
        mainService.getAppts().then(function(response) {
            $scope.appointments = response.data;
        });
    }
    $scope.appointments();
    
    Auth.$onAuth(function(authData) {
        $scope.authData = authData;
        console.log(authData);
    })
    
     $scope.login = function() {
        Auth.$authWithOAuthPopup("google")
        .catch(function(error) {
            console.error(error);
        });
    }
    
    $scope.logout = function() {
        Auth.$unauth();
    }
});

