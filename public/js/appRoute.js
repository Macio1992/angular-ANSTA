angular.module('appRoutes', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '/views/people.html',
                controller: 'peopleController',
                resolve: {
                    people: function(People) {
                        return People.getPeople();
                    }
                }
            })
            .when('/person/:personId', {
                templateUrl: '/views/person.html',
                controller: 'showPersonController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });