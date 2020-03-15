esperantoApp.factory('wordsFactory', function($http) {
 //  return a promise to use the value in controller
 return{
    getWords : function() {
        return $http({
            url: 'http://esperanto.joker.usermd.net/words',
            method: 'GET'
        })
    }
 }
});

