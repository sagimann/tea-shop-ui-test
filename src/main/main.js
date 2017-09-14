import angular from 'angular';
import { MODULE_NAME } from '../config'
const module = angular.module(MODULE_NAME)

module.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: require('./main.html'),
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .otherwise({
            redirectTo: '/'
        });
});


module
    .controller('MainCtrl', function (Restangular) {
        var teas = Restangular.all('teas').all('featured');

        teas.getList().then((teas) => {
            this.teas = teas.plain()
        });
    });
