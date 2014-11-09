'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
    function ($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    }]);


var weddingServices = angular.module('weddingServices', ['ngResource']);

weddingServices.factory('Gift', ['$resource',
    function ($resource) {
        return $resource('gifts/:giftId.json', {}, {
            query: {method: 'GET', params: {giftId: 'gifts'}, isArray: true}
        });
    }]);
