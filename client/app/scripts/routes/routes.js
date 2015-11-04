'use strict';

angular.module('mainpage.snaphy')

.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', 'cfpLoadingBarProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {
  $locationProvider.html5Mode(false);
  cfpLoadingBarProvider.includeSpinner = false;

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
       }
    )


  }]); //config
