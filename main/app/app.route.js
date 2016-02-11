'use strict';

angular.module('AngularQuickstart').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/capture', {
                templateUrl: 'app/features/capture/captureView.html',
                controller: 'CaptureController',
                title: 'CAPTURE.TITLE',
                resolve: {
                    translationPart : [ 'TranslationService',function(TranslationService){
                        return TranslationService('capture');
                    }]
                }
            })
            .when('/music/poprock', {
                templateUrl: 'app/features/music/poprock/poprockView.html',
                controller: 'PoprockController',
                title: 'MUSIC.POPROCK.TITLE',
                resolve: {
                    translationPart: [ 'TranslationService',function(TranslationService){
                       return TranslationService('poprock');
                    }]
                }
            })
            .when('/music/dance', {
                templateUrl: 'app/features/music/dance/danceView.html',
                controller: 'DanceController',
                title: 'MUSIC.DANCE.TITLE',
                resolve: {
                    translationPart: [ 'TranslationService',function(TranslationService){
                        return TranslationService('dance');
                    }]
                }
            })
            .when('/configuration', {
                templateUrl: 'app/features/configuration/configurationView.html',
                controller: 'ConfigurationController',
                title: 'CONFIGURATION.TITLE',
                resolve: {
                    translationPart : [ 'TranslationService',function(TranslationService){
                        return TranslationService('configuration');
                    }]
                }
            })
            .when('/contact', {
                templateUrl: 'app/features/contact/contactView.html',
                controller: 'ContactController',
                title: 'CONTACT.TITLE',
                resolve: {
                    translationPart : [ 'TranslationService',function(TranslationService){
                        return TranslationService('contact');
                    }]
                }
            })
            .otherwise({
                redirectTo: '/capture'
            });
    }]);