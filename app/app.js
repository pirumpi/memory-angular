
var game = angular.module('memory',['ngRoute'])

.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'templates/loader.html',
                controller  : 'loaderController'
            })

            // route for the about page
            .when('/select', {
                templateUrl : 'templates/selector.html',
                controller  : 'selectorController'
            })

            // route for the contact page
            .when('/easy', {
                templateUrl : 'templates/easy.html',
                controller  : 'gameController'
            })
            .when('/medium', {
                templateUrl : 'templates/medium.html',
                controller  : 'gameController'
            })
            .when('/hard', {
                templateUrl : 'templates/hard.html',
                controller  : 'gameController'
            })
            .otherwise('/');
    });