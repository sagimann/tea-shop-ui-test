import angular from 'angular';
import { MODULE_NAME } from '../config'

const module = angular.module(MODULE_NAME)
    .controller('TeaCtrl', function (Restangular, $routeParams) {
        var tea = Restangular.one('tea', $routeParams.id)

        tea.get().then((tea) => {
            this.details = tea;
        })

    })

module.config(function ($routeProvider) {
    $routeProvider.when('/tea/:id', {
        template: require('./tea.html'),
        controller: 'TeaCtrl',
        controllerAs: 'tea'
    })
})
