  esperantoApp.controller('quizCtrl', function($scope, $http) {
    $http.get('/words').success(function(data) {
      $scope.words = data;
      $scope.totalItems = $scope.words.length;
      $scope.randomNumber = 8;
        //Math.floor((Math.random() * $scope.totalItems) + 1); 
    });
    

  });