'use strict';

/**
 * @ngdoc service
 * @name quizModule.quizAdvancedFactory
 * @description
 * # quizAdvancedFactory
 * Factory in the quizModule.
 */
angular.module('quizModule')
  .factory('quizAdvancedFactory', function ($resource) {
    return $resource('app/data/quiz-advanced.json');
  });
