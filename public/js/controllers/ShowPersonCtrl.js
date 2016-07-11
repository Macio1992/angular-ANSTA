angular.module('ShowPersonController', ['ngRoute']).controller('showPersonController', function($scope, $routeParams, $location, People){
    People.getPerson($routeParams.personId).then(function(doc){
        $scope.person = doc.data;
    }, function(response){
        console.log(response);
    });
    
    $scope.back = function(){
        $location.url('/');
    };
});