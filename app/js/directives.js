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