'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function ($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);

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

weddingControllers.controller('Home', ['$scope',
    function ($scope) {
    }]);

weddingControllers.controller('GiftListCtrl', ['$scope', 'Gift',
    function ($scope, Gift) {
        $scope.gifts = Gift.query();

        var map = L.map('map').setView([43.5, 12], 6);

        // add an OpenStreetMap tile layer
        L.tileLayer.provider('OpenStreetMap.Mapnik')
            .addTo(map);

        $scope.leaflet_map = map;
    }]);