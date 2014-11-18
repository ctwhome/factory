/*jshint unused: vars */
require.config({
  paths   : {
    angular           : '../../bower_components/angular/angular',
    'angular-animate' : '../../bower_components/angular-animate/angular-animate',
    'angular-cookies' : '../../bower_components/angular-cookies/angular-cookies',
    'angular-mocks'   : '../../bower_components/angular-mocks/angular-mocks',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'angular-route'   : '../../bower_components/angular-route/angular-route',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-scenario': '../../bower_components/angular-scenario/angular-scenario',
    'angular-touch'   : '../../bower_components/angular-touch/angular-touch',
    'bootstrap'       : '../../bower_components/bootstrap/dist/js/bootstrap',
    'material'        : '../../bower_components/bootstrap-material-design/dist/js/material.min',
    'ripples'         : '../../bower_components/bootstrap-material-design/dist/js/ripples.min',
    'jquery'          : '../../bower_components/jquery/dist/jquery',
    'googlechart'     : '../../bower_components/angular-google-chart/ng-google-chart'
  },
  shim    : {
    'jquery'          : {
      exports: '$'
    },
    'angular'         : {
      exports: 'angular'
    },
    'angular-route'   : ['angular'],
    'angular-cookies' : ['angular'],
    'angular-sanitize': ['angular'],
    'angular-resource': ['angular'],
    'angular-animate' : ['angular'],
    'angular-touch'   : ['angular'],
    'angular-mocks'   : {
      deps   : ['angular'],
      exports: 'angular.mock'
    },
    bootstrap         : {deps: ['jquery']},
    material          : {deps: ['jquery']},
    ripples           : {deps: ['jquery', 'material']}
  },
  priority: [
    'angular'
  ],
  packages: []
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-touch',
  'jquery',
  'bootstrap',
  'material',
  'ripples'
], function (angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function () {
    angular.resumeBootstrap([app.name]);
  });

  // itit material design
  $.material.init();

});
