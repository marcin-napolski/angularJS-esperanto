esperantoApp.controller('wordsCtrl', function($scope, $http, wordsFactory) {
  /*
  $http.get('/words').success(function(data) {
  $scope.words = data;
  $scope.totalItems = $scope.words.length;
  });
  */
  
  $scope.words = [];
  $scope.totalItems = "";
  wordsFactory.getWords().success(function(data){
    $scope.words=data;
    console.log('mam slowa');
    $scope.totalItems = $scope.words.length;
    console.log($scope.totalItems);    
    $scope.randomNumber = Math.floor((Math.random() * $scope.totalItems) + 1); 
  });
  
  $scope.searchText = "";
  

  
  $scope.getEsperantoLetters = function(value) {
    return value.replace(/cx/g, 'ĉ')
      .replace(/gx/g, 'ĝ')
      .replace(/hx/g, 'ĥ')
      .replace(/jx/g, 'ĵ')
      .replace(/sx/g, 'ŝ')
      .replace(/ux/g, 'ŭ');
  };
});


