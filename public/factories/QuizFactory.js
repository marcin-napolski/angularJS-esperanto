esperantoApp.factory('quizFactory', function() {
  // You don't typically use $scope inside a factory, service or provider. 
    
  // The standard way to create an object type - and not a single object - is to use an object constructor function:
  function question(limit)
  {
    this.options = getRandomArray(limit),
    this.answer = getRandomPosition()
  };
  
  function getRandomPosition(){
    return Math.floor(Math.random() * 4 );
  };
  
  function getRandomArray(limit){
    var nonRepeatingRandomNumbersArray = [];
    for (i = 0; i < 4; i++) {
      nonRepeatingRandomNumbersArray[i] = (Math.floor(Math.random() * limit));
    }
    return nonRepeatingRandomNumbersArray;
  }
  
  return {
    /*
    getQuestion: function(id) {
      if(id < questions.length) {
        return questions[id];
      } else {
        return false;
      }
    },*/
    getAnswers: function(id, limit) {
      //console.log(limit);
      var questionObj = new question(limit);
      questionObj['options'][questionObj['answer']] = id;
      return questionObj;
      //question = {};
      //question['options'] = [1, 2, 3, 4];
    }
  };
});



/*

function arrayShuffle () {
       var i = this.length, j, temp;
       if ( i === 0 ) return false;
       while ( --i ) {
          j = Math.floor( Math.random() * ( i + 1 ) );
          temp = this[i];
          this[i] = this[j]; 
          this[j] = temp;
       }
    }

Array.prototype.shuffle =arrayShuffle;
    
var start = 1;
var end = 2056;
var numbers = new Array(); 
for (var i = start; i <= end; i++) {
    numbers.push(i);
}
numbers.shuffle();
*/