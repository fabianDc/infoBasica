'use strict';

/**
 * @ngdoc function
 * @name infoBasicaApp.controllertalentoHumano
 * @description
 * # AboutCtrl
 * Controller of the infoBasicaApp
 */
angular.module('infoBasicaApp')
  .controller('talentoCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.talentoHumano=[{"id":1}];
    $scope.estructura={}; 
    $scope.addRecurso= function (){$scope.talentoHumano.push({"id":$scope.talentoHumano.length+1});};
    $scope.deleteRecurso= function (i){        
        $scope.talentoHumano.splice(i, 1);
    };
    
    
  });
