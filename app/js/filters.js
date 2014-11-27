'use strict';

/* Filters */

var weddingFilters = angular.module('weddingFilters', []);

weddingFilters.filter('accomodationTypeFilter', function () {
    return function (array, expression, comparator, markers) {
        if (!angular.isArray(array)) return array;

        var matchs = [];
        angular.forEach(array, function (el) {
            if (('' + el[comparator]).indexOf(expression) > -1) {
                matchs.push(el);
                markers[el.id] = {
                    'lat': el.coordinates[0],
                    'lng': el.coordinates[1],
                    'title': el.name,
                    'message': '<a href="' + el.url + '">' + el.name + '</a>'
                };
            } else {
                delete markers[el.id];
            }
        });
        return matchs;
    };
});
