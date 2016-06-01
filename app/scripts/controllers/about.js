'use strict';

/**
 * @ngdoc function
 * @name infoBasicaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the infoBasicaApp
 */
angular.module('infoBasicaApp')
        .controller('AboutCtrl', function ($scope, estructuraInfo, InitInfo) {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            $scope.submit = false;
            $scope.matriz = estructuraInfo.getMatrizServicio();
            InitInfo.cargaProyectos({}, function (respuesta) {//           
                $scope.proyectos = respuesta.proyectos;
            });
            InitInfo.cargaSemanas({}, function (respuesta) {//           
                $scope.semanas = respuesta.semanas;
            });
            InitInfo.cargaCalendarios({}, function (respuesta) {//           
                $scope.calendarios = respuesta.calendarios;
            });

            $scope.addCorte = function () {
                var newItemNo = $scope.matriz.cortes.length + 1;
                $scope.matriz.cortes.push({'id': 'corte' + newItemNo});
            };
            $scope.borrarCorte = function () {
                var lastItem = $scope.matriz.cortes.length - 1;
                $scope.matriz.cortes.splice(lastItem);
            };
            $scope.cargarModalidades = function () {
                InitInfo.cargaModalidadesProyecto({"codProyecto": $scope.matriz.proyecto}, function (respuesta) {//           
                    $scope.modalidades = respuesta.modalidades_proyecto;
                });
            };
            $scope.cargarUnidades = function () {
                InitInfo.cargaUniOperativas({"CodModalidad": $scope.matriz.modalidad, "CodProyecto": $scope.matriz.proyecto}, function (respuesta) {//           
                    $scope.unidadesOperativas = respuesta.unidadesOperativas;
                });
                InitInfo.cargaUpezetas({"codUpz": $scope.matriz.upz}, function (respuesta) {//           
                    $scope.upezetas = respuesta.upezetas;
                });
            };
            $scope.guardar = function () {
                $scope.submit = true;
                estructuraInfo.salvarMatrizServicio($scope.matriz);
            };
        });
