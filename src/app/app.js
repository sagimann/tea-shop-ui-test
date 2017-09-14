import angular from 'angular'
import 'angular-route'
import 'angular-cookies'
import 'angular-messages'
import 'angular-animate'
import 'angular-aria'
import 'angular-sanitize'
import 'angular-touch'

import 'restangular'
import 'ngCart/dist/ngCart'
import 'jquery'
import 'bootstrap'

import banner from '../public/img/banner.jpg'
import '../style/app.scss';

import { MODULE_NAME } from '../config'

const module = angular.module(MODULE_NAME, [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ngCart'
]);

require('../main/main');
require('../teas/teas');
require('../tea/tea');
require('../cart/cart');

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {

  }
}



module.config(function ($locationProvider, $routeProvider, RestangularProvider, $sceDelegateProvider) {
    $locationProvider.html5Mode(true);
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. **.
        'http://localhost:3000/**'
    ]);
    RestangularProvider.setBaseUrl('http://localhost:3000');
});

module
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);
