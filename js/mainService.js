var app = angular.module('weaveSearch');

app.service('mainService', function($http) {
    this.getAppts = function() {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/appointments?slug=bradfordpicot'
        });
    }
});