'use strict';

/* Directives */
var weddingDirectives = angular.module('weddingDirectives', []);

weddingDirectives.directive('mapMarker', function () {
    function link(scope, element, attrs) {
        var g = angular.fromJson(attrs.gift);
        L.marker(g.coordinates).addTo(scope.leaflet_map).bindPopup(g.name);
    }

    return {
        link: link
    };
});

weddingDirectives.directive('counter', ['$interval', 'dateFilter', function ($interval, dateFilter) {
    function link(scope, element, attrs) {
        var timeoutId;
        var targetDate =  new Date(2015, 8, 29, 17, 0);
        var days = $('#days');
        var hours = $('#hours');
        var minutes = $('#minutes');

        function updateTime() {
            var now = new Date();
            var s = -now.getTimezoneOffset()*60 + (targetDate.getTime() - now.getTime())/1000;
            var d = Math.floor(s/86400);
            days.text(d);
            s -= d*86400;

            var h = Math.floor(s/3600);
            hours.text(h);
            s -= h*3600;

            var m = Math.floor(s/60);
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