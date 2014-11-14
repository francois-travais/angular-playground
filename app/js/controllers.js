'use strict';

/* Controllers */

var weddingControllers = angular.module('weddingControllers', []);

weddingControllers.controller('HeaderController', ['$scope', '$location',
    function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            if ($location.url()) {
                return $location.url().indexOf(viewLocation) === 0;
            }
            return false;
        }
    }]);

weddingControllers.controller('HomeCtrl', ['$scope',
    function ($scope) {
    }]);

weddingControllers.controller('GiftListCtrl', ['$scope', 'Gift',
    function ($scope, Gift) {
        $scope.gifts = Gift.query();

        $scope.markers = {};

        $scope.mapCenter = {
            lat: 43.5,
            lng: 12,
            zoom: 6
        };

        $scope.mapDefaults = {
            scrollWheelZoom: false,
            doubleClickZoom: true
        };
    }]);

weddingControllers.controller('AccommodationCtrl', ['$scope', 'Accommodation',
    function ($scope, Accommodation) {
        $scope.accommodations = Accommodation.query();

        $scope.markers = {};

        $scope.mapCenter = {
            lat: 46.75,
            lng: 0.6,
            zoom: 11
        };

        $scope.mapDefaults = {
            scrollWheelZoom: false,
            doubleClickZoom: true
        };
    }]);
