angular.module('PeopleService', ['ngRoute']).service('People', function($http){
    
    this.getPeople = function() {
        return $http.get('/people').then(function(response){
            return response;
        }, function(response){
            console.log('Error getting students');
        });
    };
    
    this.getPerson = function(personId) {
        var url = '/people/' + personId;
        return $http.get(url).then(function(response){
            return response;
        }, function(response){
            console.log('Error finding this person');
        });
    }
});