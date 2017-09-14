import angular from 'angular';
import { MODULE_NAME } from '../config'

const module = angular.module(MODULE_NAME)
    .controller('TeasCtrl', function (Restangular, $scope, $location, $cookies) {

        $scope.sortOptions = [
            { name: "Name", prop: "name", desc: false },
            { name: "Cheapest", prop: "price", desc: false },
            { name: "Expensive", prop: "price", desc: true }
        ]
        // keep sort indexes for later:
        for (var i in $scope.sortOptions) {
            $scope.sortOptions[i].idx = i;
        }
        $scope.selectedSort = $scope.sortOptions[parseInt($cookies.get('sort')) || 0]
        $scope.$watch('selectedSort', function(v) {
            if (typeof v === 'object' && typeof v.idx !== undefined)
                $cookies.put('sort', v.idx);
        });

        $scope.layout = $cookies.get('layout') || 'grid'
        $scope.$watch('layout', function(v) {
            if (typeof v !== undefined)
                $cookies.put('layout', v);
        });
        $scope.setLayout = function(layout) {
            $scope.layout = layout
        }

        $scope.filter = $cookies.get('filter');
        if (typeof $scope.filter !== undefined)
            $scope.filter = $scope.filter !== '' ? {'$': $scope.filter} : undefined;
        $scope.$watch('filter.$', function(v) {
            if (typeof v !== undefined)
                $cookies.put('filter', v);
        });

        $scope.goToDetails = function(teaId) {
            $location.path('/tea/' + teaId);
        }

        // Load the data
        var teas = Restangular.all('teas')
        teas.getList().then((teas) => {
            $scope.teaList = teas.plain()

            // extract types and sort them for display:
            var typesFromResult = {}
            for (var i in $scope.teaList) {
                typesFromResult[$scope.teaList[i].type] = "1"
            }
            $scope.types = Object.keys(typesFromResult)
            $scope.types.sort()
            $scope.types.splice(0, 0, "Any Type")
            $scope.type = $cookies.get('type') || $scope.types[0]
            $scope.$watch('type', function(v) {
                if (typeof v !== undefined)
                    $cookies.put('type', v);
            });

        })
        
    })

module.config(function ($routeProvider) {
    $routeProvider.when('/teas', {
        template: require('./teas.html'),
        controller: 'TeasCtrl',
        controllerAs: 'teas'
    })
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})