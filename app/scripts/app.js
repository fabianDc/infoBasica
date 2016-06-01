'use strict';

/**
 * @ngdoc overview
 * @name infoBasicaApp
 * @description
 * # infoBasicaApp
 *
 * Main module of the application.
 */
angular.module('infoBasicaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularjs-datetime-picker',
    'ui.select2',
    'ngFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/talento', {
        templateUrl: 'views/talento.html',
        controller: 'talentoCtrl',
        controllerAs: 'talento'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
