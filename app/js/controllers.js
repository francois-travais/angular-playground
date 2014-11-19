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
        $scope.markers = {
            'alia': {
                lat: 46.791364,
                lng: 0.624408,
                title: 'La ferme Alia',
                message: '<a href="http://www.lafermealia.fr">La ferme Alia</a>',
                focus: true
            }
        };

        $scope.center = {
            lat: 46.791364,
            lng: 0.624408,
            zoom: 10
        };

        $scope.mapDefaults = {
            scrollWheelZoom: false,
            doubleClickZoom: true
        };
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

weddingControllers.controller('ContactCtrl', ['$scope', '$modal', '$log',
    function ($scope, $modal, $log) {
        $scope.openReply = function () {

            var modalInstance = $modal.open({
                templateUrl: 'partials/components/reply-form.html',
                controller: 'ReplyFormCtrl'
            });

            modalInstance.result.then(function () {
                $log.info('Reply form modal dismissed at: ' + new Date());
            });
        };

        $scope.openContact = function () {

            var modalInstance = $modal.open({
                templateUrl: 'partials/components/contact-form.html',
                controller: 'ContactFormCtrl'
            });

            modalInstance.result.then(function () {
                $log.info('Contact form modal dismissed at: ' + new Date());
            });
        };
    }]);

weddingControllers.controller('ReplyFormCtrl', ['$scope', '$modalInstance', '$log',
    function ($scope, $modalInstance, $log) {
        $scope.replyForm = {
            name: '',
            email: '',
            number: 1,
            comment: ''
        };

        $scope.isDisabled = function (reply) {
            return !reply.$dirty || reply.$invalid;
        };

        $scope.save = function (reply) {
            if ($scope.isDisabled(reply)) return;
            $log('reply form saved');

            reply.$dirty = false;
            $modalInstance.close('reply form saved');
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);

weddingControllers.controller('ContactFormCtrl', ['$scope',  '$modalInstance', '$log',
    function ($scope, $modalInstance) {
        $scope.contactForm = {
            name: '',
            email: '',
            message: ''
        };

        $scope.isDisabled = function (contact) {
            return !contact.$dirty || contact.$invalid;
        };

        $scope.save = function (contact) {
            if ($scope.isDisabled(contact)) return;
            $log('contact form saved');
            contact.$dirty = false;
            $modalInstance.close('contact form saved');
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);