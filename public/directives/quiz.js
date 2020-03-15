/*esperantoApp.directive('quiz', function () {
    return {
        templateUrl: '../views/quiz.html'
    };
});
*/


esperantoApp.directive('quiz', function(quizFactory){
  return {
    restrict: 'AE',
    //scope: {},
    templateUrl: '../views/quiz.html',
    link: function(scope, elem, attrs){
      scope.start = function() {
        scope.id = 0;
        scope.quizOver = false;
        scope.inProgress = true;
        scope.getQuestion();
        scope.style = "btn btn-primary";
        scope.style_0 = "btn btn-primary";
        scope.style_1 = "btn btn-primary";
        scope.style_2 = "btn btn-primary";
        scope.style_3 = "btn btn-primary";
        //console.log(scope.style[0]);
      };

      scope.reset = function() {
        scope.inProgress = false;
        scope.score = 0;
      }

      scope.getQuestion = function(){

        //document.getElementById("style_1").style = "btn btn-primary";
        scope.style = "btn btn-primary";
        //var random = scope.words[Math.floor(Math.random() * scope.words.length)].wordEO;
        var numberOfWords = scope.words.length;
        var random = Math.floor(Math.random() * numberOfWords + 1);  
        
        var randomWordEO = scope.words[random].wordEO;  

        //console.log(numberOfWords);
        // invoke factory, which will return question object
        var q = quizFactory.getAnswers(random, numberOfWords);
        //console.log(q);
        //console.log(randomWordEO);

        if(q) {
          scope.question = "Co oznacza po polsku słowo " + randomWordEO + "?";
          //for (var i = 1, len = q.options.length; i < len; i++) {
          //  scope.options[i] = scope.words[q.options[i]].wordPL;
          //}

          
          var optionWords = [];
          //var optionWords2 = [];
          for (var i = 0, len = q.options.length; i < len; i++) {
            optionWords[i] = scope.words[q.options[i]].wordPL;
            console.log(q.options[i]);
          }
          scope.options = optionWords;
          
          //console.log(options);
          //console.log(optionWords);
          
          scope.answer = q.answer;
          scope.answerMode = true;
        } else {
          scope.quizOver = true;
        }
      };

      
      scope.checkAnswer = function(ans) {
        //if(!$('input[name=answer]:checked').length) return;
        
        //var ans = $('input[name=answer]:checked').val();
        //       console.log(ans);
        //       console.log(scope.options);
        var rightAnsNumber = scope.answer;
        //console.log("right answer is " + rightAnsNumber);
        if(ans == scope.options[scope.answer]) {
          scope.score++;
          scope.correctAns = true;
          
        } else {
          scope.correctAns = false;
          
        }
        scope.answerMode = false;
        //setTimeout(scope.nextQuestion(), 2000);
        // not working        scope.style = "btn btn-warning";
        
        //var elCorrect = document.getElementById("style_" + rightAnsNumber);
        // must be 'className' - 'class' is a reserved word in JavaScript
        //elCorrect.className = "btn btn-success";
        //console.log(elCorrect);
        
        for (var n=0;n<4;n++){
          if (n == rightAnsNumber){
            document.getElementById("style_" + n).className = "btn btn-success";
          }else{
            document.getElementById("style_" + n).className = "btn btn-warning";               
          }
        }
        
        var timeout = setTimeout(function(){
          scope.nextQuestion();
          scope.$apply();
        }, 2000);
        
        
        //setTimeout(function(){console.log('hi there');scope.nextQuestion();}, 1000);
        
      };

      scope.nextQuestion = function() {
        scope.id++;
        scope.getQuestion();
      }

      scope.reset();
    }
  }
});
