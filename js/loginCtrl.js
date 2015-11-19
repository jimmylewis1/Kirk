var app = angular.module('weaveSearch');

app.controller('loginCtrl', function($scope){
    $scope.submit = function() {
        var uname = $scope.username;
        var password = $scope.password;
        if($scope.username === 'admin' && $scope.password === 'admin'){
            $location.path('/index.html')
        }
        else{
            alert('Incorrect email or password.'<br>
                 'Please try again.');
        }
    };
});