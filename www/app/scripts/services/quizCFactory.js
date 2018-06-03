'use strict';

/**
 * @ngdoc service
 * @name quizModule.quizAdvancedFactory
 * @description
 * # quizAdvancedFactory
 * Factory in the quizModule.
 */
angular.module('quizModule')
  .factory('quizCFactory', function ($resource) {
    return $resource('app/data/quiz-c.json');
  });
