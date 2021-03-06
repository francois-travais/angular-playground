'use strict';

/* Directives */
var weddingDirectives = angular.module('weddingDirectives', []);

//weddingDirectives.directive('mapMarker', [function () {
//    function controller($scope) {
//        $scope.$parent.$parent.markers[$scope.id] = {
//            'lat': $scope.lat,
//            'lng': $scope.lng,
//            'title': $scope.name
//        };
//    }
//
//    return {
//        transclude: true,
//        scope: {
//            lat: '=',
//            lng: '=',
//            id: '=',
//            name: '='
//        },
//        restrict: 'E',
//        template: '',
//        replace: true,
//        controller: ["$scope", controller]
//    }
//}]);

weddingDirectives.directive('fixedTop', function ($window) {
    function controller($scope, $element, $attrs) {

        angular.element($window).on('scroll', function () {
            if ($window.scrollY > 100) {
                if (!$element[0].classList.contains("sticky-top")) {
                    $element[0].classList.add("sticky-top");
                }
            } else {
                $element[0].classList.remove("sticky-top")
            }
        });
    }

    return {
        restrict: 'A',
        controller: controller
    };
});

weddingDirectives.directive('stickLeft', function ($window) {
    function controller($scope, $element, $attrs) {

        angular.element($window).on('scroll', function () {
            if ($window.scrollY > 265) {
                if (!$element[0].classList.contains("sticky")) {
                    $element[0].classList.add("sticky");
                }
            } else {
                $element[0].classList.remove("sticky")
            }
        });
    }

    return {
        restrict: 'A',
        controller: controller
    };
});


weddingDirectives.directive('counter', ['$interval', 'dateFilter', function ($interval, dateFilter) {
    function link(scope, element, attrs) {
        var timeoutId;
        var targetDate = new Date(2015, 8, 29, 16, 0);
        var days = $('#days');
        var hours = $('#hours');
        var minutes = $('#minutes');

        function updateTime() {
            var now = new Date();
            var s = -now.getTimezoneOffset() * 60 + (targetDate.getTime() - now.getTime()) / 1000;
            var d = Math.floor(s / 86400);
            days.text(d);
            s -= d * 86400;

            var h = Math.floor(s / 3600);
            hours.text(h);
            s -= h * 3600;

            var m = Math.floor(s / 60);
            minutes.html(m);
        }

        element.on('$destroy', function () {
            $interval.cancel(timeoutId);
        });

        // start the UI update process; save the timeoutId for canceling
        timeoutId = $interval(function () {
            updateTime(); // update DOM
        }, 1000);
    }

    return {
        link: link
    };
}]);