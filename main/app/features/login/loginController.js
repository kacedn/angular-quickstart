'use strict';

angular.module('AngularQuickstart')
    .controller('LoginController', [
        '$scope',
        'AuthService',
        function ($scope, AuthService) {

            $scope.authService = AuthService;

        }]);
