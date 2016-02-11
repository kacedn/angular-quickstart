/**
 * Created by nka on 10/02/2016.
 */
angular.module('AngularQuickstart')
    .controller('ContactController', ['$scope', '$translate', function ($scope, $translate) {

        $scope.personne = {};
        $scope.text = "";

        $scope.personne.firstname = "Nabil";
        $scope.personne.lastname = "Kaced";
        $scope.personne.age = "27";
        $scope.personne.mail = "bob@gmail.com";
        $scope.text = "This is my mail to send.";

        $scope.send = function(){
            alert("You will send this following text by email to john\n"+$scope.text);
        }
    }]);