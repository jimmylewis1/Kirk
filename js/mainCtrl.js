var app = angular.module('weaveSearch');

app.controller('mainCtrl', function($scope, mainService){
    
    $scope.test = "Hello.";
    
    $scope.appointments = function() {
        mainService.getAppts().then(function(response) {
            $scope.appointments = response.data;
        });
    }
    $scope.appointments();
});

