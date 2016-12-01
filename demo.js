var app = angular.module('demo', []);

app.controller('Name', function($scope, $http) {
    $http.get('http://127.0.0.1:8080/name').
        then(function(response) {
            $scope.name = response.data;
        });
});

app.controller('Schedule', function($scope, $http) {
    $http.get('http://127.0.0.1:8081/days').
        then(function(response) {
            $scope.schedule = response.data;
        });
});
