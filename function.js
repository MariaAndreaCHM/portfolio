var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);
        angularRoutingApp.config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'pages/soy.html',
                    controller: 'mainController'
                })
                .when('/competencias', {
                    templateUrl: 'pages/competencias.html',
                    controller: 'mainController'
                })
                .when('/estudios', {
                    templateUrl: 'pages/educacion.html',
                    controller: 'mainController'
                })
                .when('/portafolio', {
                    templateUrl: 'pages/portafolio.html',
                    controller: 'mainController'
                })
                .when('/experiencia', {
                    templateUrl: 'pages/experiencia.html',
                    controller: 'mainController'
                })
                .when('/contacto', {
                    templateUrl: 'pages/contacto.html',
                    controller: 'mainController'
                })
               

              
        });

        angularRoutingApp.controller('mainController', function ($scope) {
            $scope.message = 'Moi';
        });

        angularRoutingApp.controller('mainController', function ($scope) {
            $scope.message = 'Competences"';
        });

        angularRoutingApp.controller('mainController', function ($scope) {
            $scope.message = 'Formation';
        });
        angularRoutingApp.controller('mainController', function ($scope) {
            $scope.message = 'Portfolio';
        });

        angularRoutingApp.controller('mainController', function ($scope) {
            $scope.message = 'Experience"';
        });

        angularRoutingApp.controller('mainController', function ($scope) {
            $scope.message = 'Contact';
        });
        angularRoutingApp.controller('mainController', function ($scope) {
            $scope.message = 'Ideal';
        });



      