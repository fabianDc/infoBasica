'use strict';

/**
 * @ngdoc function
 * @name infoBasicaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the infoBasicaApp
 */
angular.module('infoBasicaApp')
        .controller('MainCtrl', function ($scope, estructuraInfo) {
            $scope.CargarEstructura = function (id) {
                estructuraInfo.datosMatrizServicio(id).succes(function (data) {
                    if (data.estado)
                        window.location("/about");
                });

            };
        });