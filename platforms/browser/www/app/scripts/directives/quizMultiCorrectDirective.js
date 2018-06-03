'use strict';

/**
 * @ngdoc directive
 * @name quizModule.directive:quizMultiChoiceDirective
 * @description
 * # quizMultiCorrectDirective
 */
angular.module('quizModule')
  .directive('quizMulticorrect', function () {
    return {
      scope:       {
        filterBy: '='
      },
      restrict:    'E',
      templateUrl: 'app/scripts/partials/quiz-multi-correct.html'
    };
  });
