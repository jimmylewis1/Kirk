var app = angular.module('weaveSearch', ["firebase"]);

app.factory("Auth", function($firebaseAuth) {
    var ref = new Firebase("https://weave-query.firebaseio.com");
    return $firebaseAuth(ref);
});