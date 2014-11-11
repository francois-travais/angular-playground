'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',

    'weddingControllers',
    'weddingServices',
    'weddingDirectives'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
        when('/gifts', {
            templateUrl: 'partials/gift-list.html',
            controller: 'GiftListCtrl'
        }).
        when('/home', {
          templateUrl: 'partials/home.html',
          controller: 'Home'
        }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
