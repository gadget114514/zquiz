/**
 * @ngdoc function
 * @name quizModule.controller:QuizAdvancedController
 * @description
 * # QuizAdvancedController
 * Controller of the quizModule
 */
angular.module('quizModule')
  .controller('QuizCCController',
	      function ($scope, quizCFactory, filterFilter, $routeParams) {
    var createResults;
		  $scope.title = null; // quiz title
    $scope.items = []; // quiz questions		  
   var carousel;

    $scope.hasPrevious = function() {
      return carousel ? carousel.hasPrevious() : false;
    };
    $scope.previous = function() {
      if (carousel) { carousel.prev(); }
    };
    $scope.hasNext = function() {
      return carousel ? carousel.hasNext() : false;
    };
    $scope.next = function() {
      if (carousel) { carousel.next(); }
    };

    // prepare array of result objects
    var createResults = function () {
	var len = $scope.items.length;		      
	 for (var j = 0; j < len; j++) {

	     $scope.results = [];
	     $scope.quiz = $scope.items[j].questions;
	     console.log("quiz=",	     $scope.quiz );
	     var xlen = $scope.quiz.length;
	     for (var i = 0; i < xlen; i++) {
		 $scope.results.push({
		     _id:        $scope.quiz[i]._id,
		     answer:     $scope.quiz[i].answer,
		     userChoice: null,
		     correct:    null
		 });
	     }
	 }
//	     $scope.quiz = $scope.items[0].questions;	 
    };
    var loadItems = function(carouselScope, page) {
		  quizCFactory.get(function (data) {
		      console.log("data=", data);
		      $scope.items = data.items;
		      console.log("data=", $scope.items);		      
		      createResults();
		      carousel.updatePageCount($scope.items.length);
		  });
	    carouselScope.getPhotoUrl = function(photo) {
	    console.log("out");
	}
    };
    $scope.loadPage = function(page, tmplCb) {
      var newScope = $scope.$new();
      loadItems(newScope, page);
      tmplCb(newScope);
    };
    $scope.onCarouselAvailable = function(car) {
      carousel = car;
    };
		  
    $scope.itemNo = $routeParams && $routeParams.itemNo ? $routeParams.itemNo : 0;


		  
    $scope.checkUserMultiCorrectChoice = function (question, userChoice) {
      // create blank array
      if ($scope.results[question - 1].userChoice === null) {
        $scope.results[question - 1].userChoice = [];
      }

      // find choice, if not there the add or if there remove
      var pos = $scope.results[question - 1].userChoice.indexOf(userChoice);
      if (pos < 0) {
        $scope.results[question - 1].userChoice.push(userChoice);
      } else {
        $scope.results[question - 1].userChoice.slice(pos, 1);
      }

      // check the user's choice against the answer
      var answer = JSON.stringify($scope.quiz[question - 1].answer.sort());
      var choice = JSON.stringify($scope.results[question - 1].userChoice.sort());

      if (answer === choice) {
        $scope.results[question - 1].correct = true;
      } else {
        $scope.results[question - 1].correct = false;
      }
    };

    // used for multiple choice and true-false type questions
    $scope.checkUserChoice = function (question, userChoice) {
      // assign the user's choice to userChoice
      $scope.results[question - 1].userChoice = userChoice;

      // check the user's choice against the answer
      if ($scope.results[question - 1].answer === userChoice) {
        $scope.results[question - 1].correct = true;
      } else {
        $scope.results[question - 1].correct = false;
      }
    };

    // find a specific question
		  $scope.filteredQuestion = function (questionId) {

		      var x = filterFilter($scope.quiz, {_id: questionId});
		      console.log("filter=", $scope.quiz, questionId, x);		      
		      return x;
    };
  });
