/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module('infoBasicaApp')
        .factory('InitInfo', function ($resource) {
            var $url = 'http://localhost/ws_sdis/servicios_sociales';
            return $resource('', {}, {
                cargaSemanas: {
                    method: 'POST',
                    url: $url + '/dominios/getSemanas'
                },
                cargaProyectos: {
                    method: 'POST',
                    url: $url + '/dominios/getProyectos'
                },
                cargaCalendarios: {
                    method: 'POST',
                    url: $url + '/dominios/getCalendarios'
                },
                cargaModalidadesProyecto: {
                    method: 'GET',
                    url: $url + '/dominios/getModalidadesPorProyecto/:codProyecto'
                },
                cargaUniOperativas: {
                    method: 'POST',
                    url: $url + '/dominios/getUnidadesOperativas'
                },
                cargaUpezetas: {
                    method: 'GET',
                    url: $url + '/dominios/getUpezetas/:codUpz'
                }
            });
        });



