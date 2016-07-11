angular.module('PeopleCtrl', ['ngRoute']).controller('peopleController', function(people, $scope, $location) {
    $scope.message = 'People';
    $scope.people = people.data;
    
    $scope.goToPerson = function(personId){
        var url = '/person/'+personId;
        $location.url(url);
    }
});