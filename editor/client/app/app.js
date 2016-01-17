'use strict';

angular.module('editorApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'cfp.hotkeys'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .constant('_', window._) //http://stackoverflow.com/a/23984685
  .constant('d3', window.d3)
  ;
