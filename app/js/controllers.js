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

        $scope.types = [
            {
                value: "",
                display: "Tous"
            },
            {
                value: "Hôtel",
                display: "Hôtel"
            },
            {
                value: "Camping",
                display: "Camping"
            },
            {
                value: "Chambres d'hôtes",
                display: "Chambres d'hôtes"
            },
            {
                value: "Gîte",
                display: "Gîte"
            }];
        $scope.showType = $scope.types[0].value;

        $scope.markers = {
            'alia': {
                lat: 46.791364,
                lng: 0.624408,
                title: 'La ferme Alia',
                message: '<a href="http://www.lafermealia.fr">La ferme Alia</a>'
            }
        };

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

weddingControllers.controller('ContactCtrl', ['$scope',
    function ($scope) {
        $scope.isReplyDisabled = function (reply) {
            return !reply.$dirty || reply.$invalid;
        };

        $scope.isContactDisabled = function (contact) {
            return !contact.$dirty || contact.$invalid;
        };

        $scope.saveReply = function (reply) {
            if ($scope.isReplyDisabled(reply)) return;
            console.log('reply form saved');

            reply.$dirty = false;
            resetReply();
        };

        $scope.saveContact = function (contact) {
            if ($scope.isContactDisabled(contact)) return;
            console.log('contact form saved');

            contact.$dirty = false;
            resetContact();
        };

        function resetReply() {
            $scope.replyForm = {
                name: '',
                email: '',
                number: 1,
                comment: ''
            };
        }

        function resetContact() {
            $scope.contactForm = {
                name: '',
                email: '',
                message: ''
            };
        }
        resetReply();
        resetContact();
    }]);