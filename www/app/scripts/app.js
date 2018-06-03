'use strict';

/**
 * @ngdoc overview
 * @name quizModule
 * @description
 * # quizModule
 *
 * Main module of the application.
 */
angular.module('quizModule', [
  'ngResource', 'ngRoute'
]).config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/views/main.html',
    controller:  'MainCtrl'
  }).when('/about', {
    templateUrl: 'app/views/about.html',
    controller:  'AboutCtrl'
  }).when('/quizAdvanced', {
    templateUrl: 'app/views/quiz-advanced.html',
    controller:  'QuizAdvancedController'
  }).when('/quizBasic', {
    templateUrl: 'app/views/quiz-basic.html',
    controller:  'QuizBasicController'
  }).when('/quizC', {
    templateUrl: 'app/views/quiz-c.html',
    controller:  'QuizCController'
  }).when('/quizC/:itemNo', {
    templateUrl: 'app/views/quiz-c.html',
    controller:  'QuizCController'
  }).otherwise({
    redirectTo: '/'
  });

  // use the HTML5 History API
  // http://scotch.io/quick-tips/js/angular/pretty-urls-in-angularjs-removing-the-hashtag
  $locationProvider.html5Mode(true);
});
