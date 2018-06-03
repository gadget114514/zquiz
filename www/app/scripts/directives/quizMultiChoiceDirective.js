'use strict';

/**
 * @ngdoc directive
 * @name quizModule.directive:quizMultiChoiceDirective
 * @description
 * # quizMultiChoiceDirective
 */
angular.module('quizModule')
  .directive('quizMultichoice', function () {
    return {
      scope:       {
        filterBy: '='
      },
      restrict:    'E',
      templateUrl: 'app/scripts/partials/quiz-multi-choice.html'
    };
  });
