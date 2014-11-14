'use strict';

/* App Module */

var weddingApp = angular.module('weddingApp', [
    'ngRoute',
    'leaflet-directive',

    'weddingControllers',
    'weddingServices',
    'weddingDirectives'
]);

weddingApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/gifts', {
                templateUrl: 'partials/gift-list.html',
                controller: 'GiftListCtrl'
            }).
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            }).
            when('/accommodation', {
                templateUrl: 'partials/accommodation.html',
                controller: 'AccommodationCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);
