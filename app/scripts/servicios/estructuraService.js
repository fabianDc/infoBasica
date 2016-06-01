/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module('infoBasicaApp')
        .factory('estructuraInfo', function ($http) {
            var matrizServicio = {
                "CodServicio": "",
                "Cupos": "0",
                "chekCorte": false,
                "chkAdicional": false
            };
            matrizServicio.cortes = [];

            return {
                datosMatrizServicio: function (id) {
                    $http.post("http://localhost/ws_sdis/servicios_sociales/dominios/getEstructuraServicio", {"id": id})
                            .success(function (data) {
                                console.log(data);
                            });
                },
                getMatrizServicio: function () {
                    return matrizServicio;
                },
                salvarMatrizServicio: function (datos) {
                    $http.post("http://localhost/ws_sdis/servicios_sociales/acciones/guardarMatrizS", datos)
                        .success(function (data) {                      
                           if(data.tipo === 1){
                               datos.codigo=data.codigo;
                               matrizServicio=datos;
                           }
                        });
                }

            };
        });

