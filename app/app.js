"use strict";


var app = angular.module("RoutesApp", ['ngRoute']);

app.config(function($routeProvider) {  //RouteProvider links to ng-view
    $routeProvider.
    when('/routeCtrl', {
            templateUrl: "partials/partialOne.html",
            controller: 'routeCtrl'
        }).
    when('/routeCtrl2', {
    		templateUrl: "partials/partialTwo.html",
    		controller: 'routeCtrl2'
    })
    .otherwise('/');
});