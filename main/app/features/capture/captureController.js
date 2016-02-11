/**
 * Created by nka on 03/02/2016.
 */
'use strict';

angular.module('AngularQuickstart')
    .controller('CaptureController', ['$scope', '$translate', function ($scope, $translate) {

        $scope.message = "Hello, you can capture by clicking on this button!!";

        $scope.capture = function(){
            alert("Capture lancée");
        };

    }]);
