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

weddingControllers.controller('AccommodationCtrl', ['$scope', 'AccommodationResource',
    function ($scope, AccommodationResource) {
        $scope.accommodations = AccommodationResource.query().$promise.then(function (accommodations) {
            console.log(accommodations);
            $scope.accommodations = accommodations.accommodations;
        });

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

weddingControllers.controller('ContactCtrl', ['$scope', '$modal',
    function ($scope, $modal) {
        $scope.openReply = function () {

            var modalInstance = $modal.open({
                templateUrl: 'partials/components/reply-form.html',
                controller: 'ReplyFormCtrl'
            });

            modalInstance.result.then(function () {
                console.info('Reply form modal dismissed at: ' + new Date());
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

weddingControllers.controller('ReplyFormCtrl', ['$scope', '$modalInstance', 'ReplyResource',
    function ($scope, $modalInstance, ReplyResource) {
        $scope.replyForm = {
            name: '',
            email: '',
            adultNb: 1,
            childNb: 1,
            comment: ''
        };

        $scope.alerts = [];

        $scope.isDisabled = function (reply) {
            return !reply.$dirty || reply.$invalid;
        };

        $scope.save = function (reply) {
            if ($scope.isDisabled(reply)) return;
            ReplyResource.save(reply).$promise
                .then(function (response) {
                    console.log("Reply sent: " + response);
                    reply.$dirty = false;
                    $modalInstance.close('reply form saved');
                })
                .catch(function () {
                    $scope.alerts.push({ type: 'danger', msg: "Les informations n'ont pas put être transmise."});
                    console.error("Something went wrong while sending reply form")
                });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);

weddingControllers.controller('ContactFormCtrl', ['$scope', '$modalInstance', 'ContactResource',
    function ($scope, $modalInstance, ContactResource) {
        $scope.contactForm = {
            name: '',
            email: '',
            message: ''
        };

        $scope.alerts = [];

        $scope.isDisabled = function (contact) {
            return !contact.$dirty || contact.$invalid;
        };

        $scope.save = function (contact) {
            if ($scope.isDisabled(contact)) return;
            ContactResource.save(contact).$promise
                .then(function (response) {
                    console.log("Contact send: " + response);
                    contact.$dirty = false;
                    $modalInstance.close('contact form saved');
                })
                .catch(function () {
                    $scope.alerts.push({ type: 'danger', msg: "Les informations n'ont pas put être transmise."});
                    console.error("Something went wrong while sending contact form");
                });

        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);