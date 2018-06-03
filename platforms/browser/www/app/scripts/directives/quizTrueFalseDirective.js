'use strict';

/**
 * @ngdoc directive
 * @name quizModule.directive:quizTrueFalseDirective
 * @description
 * # quizTrueFalseDirective
 */
angular.module('quizModule')
  .directive('quizTruefalse', function () {
    return {
      scope:       {
        filterBy: '='
      },
      restrict:    'E',
      templateUrl: 'app/scripts/partials/quiz-true-false.html'
    };
  });
