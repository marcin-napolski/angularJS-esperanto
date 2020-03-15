
esperantoApp.controller('gramatykaCtrl', function ($scope) {

  $scope.categories = [
    {"id": 1, "name": "rzeczowniki"},
    {"id": 2, "name": "czasowniki"},
    {"id": 3, "name": "przymiotniki"},
    {"id": 4, "name": "przyslowki"},
    {"id": 5, "name": "zaimki"},
    {"id": 6, "name": "liczebniki"},
    {"id": 7, "name": "przyimki"},
    {"id": 8, "name": "imieslowy"},
    {"id": 9, "name": "spojniki"}
    
  ];
  //$scope.glowne();
  this.show = true;   
  //$scope.randomNumber = 7;
  
   $scope.glowne = function() {
    
      $scope.zeroNumber = '0';    
      $scope.zeroPL = 'zero';
      $scope.zeroEO = 'nul';

      $scope.oneNumber = '1';
      $scope.onePL = 'jeden';
      $scope.oneEO = 'unu';

      $scope.twoNumber = '2';
      $scope.twoPL = 'dwa';
      $scope.twoEO = 'du';
      
      $scope.threeNumber = '3';       
      $scope.threePL = 'trzy';
      $scope.threeEO = 'tri';
      
      $scope.fourNumber = '4';
      $scope.fourPL = 'cztery';
      $scope.fourEO = 'kvar';
      
      $scope.fiveNumber = '5';
      $scope.fivePL = 'pięć';
      $scope.fiveEO = 'kvin';
      
      $scope.sixNumber = '6';       
      $scope.sixPL = 'sześć';
      $scope.sixEO = 'ses';
     
      $scope.sevenNumber = '7';       
      $scope.sevenPL = 'siedem';
      $scope.sevenEO = 'sep';  

      $scope.eightNumber = '8';    
      $scope.eightPL = 'osiem';
      $scope.eightEO = 'ok';

      $scope.nineNumber = '9';     
      $scope.ninePL = 'dziewięć';
      $scope.nineEO = 'naŭ';

      $scope.tenNumber = '10';     
      $scope.tenPL = 'dziesięć';
      $scope.tenEO = 'dek';    

      $scope.elevenNumber = '11';      
      $scope.elevenPL = 'jedenaście';
      $scope.elevenEO = 'dek unu';

      $scope.twentyNumber = '20';      
      $scope.twentyPL = 'dwadzieścia';
      $scope.twentyEO = 'dudek';

      $scope.twentyOneNumber = '21';        
      $scope.twentyOnePL = 'dwadzieścia jeden';
      $scope.twentyOneEO = 'dudek unu';

      $scope.oneHundredNumber = '100';      
      $scope.oneHundredPL = 'sto';
      $scope.oneHundredEO = 'cent';
 
      $scope.oneTousandNumber = '1000';       
      $scope.oneTousandPL = 'tysiąc';                    
      $scope.oneTousandEO = 'mil';  
    }
      
    $scope.porzadkowe = function() {

      $scope.zeroNumber = '0';    
      $scope.zeroPL = 'zerowy/a/e';
      $scope.zeroEO = 'nula';
      
      $scope.oneNumber = '1';
      $scope.onePL = 'pierwszy/a/e';
      $scope.oneEO = 'unua';
      
      $scope.twoNumber = '2';      
      $scope.twoPL = 'drugi/a/e';
      $scope.twoEO = 'dua';
       
      $scope.threeNumber = '3';       
      $scope.threePL = 'trzeci/a/e';
      $scope.threeEO = 'tria';
        
      $scope.fourNumber = '4';    
      $scope.fourPL = 'czwarty/ae';
      $scope.fourEO = 'kvara';
       
      $scope.fiveNumber = '5';     
      $scope.fivePL = 'piąty/a/e';
      $scope.fiveEO = 'kvina';
            
      $scope.sixNumber = '6';
      $scope.sixPL = 'szósty/a/e';
      $scope.sixEO = 'sesa';
           
      $scope.sevenNumber = '7';
      $scope.sevenPL = 'siódmy/a/e';
      $scope.sevenEO = 'sepa';  
 
      $scope.eightNumber = '8';      
      $scope.eightPL = 'ósmy/a/e';
      $scope.eightEO = 'oka';
 
      $scope.nineNumber = '9';      
      $scope.ninePL = 'dziewiąty/a/e';
      $scope.nineEO = 'naŭa';
      
      $scope.tenNumber = '11'; 
      $scope.tenPL = 'dziesiąty/a/e';
      $scope.tenEO = 'deka';    
  
      $scope.elevenNumber = '11';     
      $scope.elevenEO = 'dek unua';
      $scope.elevenPL = 'jedenasty/a/e';
      
      $scope.twentyNumber = '20'; 
      $scope.twentyEO = 'dudeka';
      $scope.twentyPL = 'dwadziesty/a/e';
      
      $scope.twentyOneNumber = '21';       
      $scope.twentyOneEO = 'dudek unua';
      $scope.twentyOnePL = 'dwadziesty pierwszy/a/e';
      
      $scope.oneHundredNumber = '100';      
      $scope.oneHundredEO = 'centa';
      $scope.oneHundredPL = 'setny/a/e';

      $scope.oneTousandNumber = '1000';      
      $scope.oneTousandEO = 'mila'
      $scope.oneTousandPL = 'tysięczny/a/e'
    }
      
    $scope.rzeczownikowe = function() {
      
      $scope.zeroNumber = '0';    
      $scope.zeroPL = 'zero';
      $scope.zeroEO = 'nulo';

      $scope.oneNumber = '1';      
      $scope.onePL = 'jedynka';
      $scope.oneEO = 'unuo ';
      
      $scope.twoNumber = '2';      
      $scope.twoPL = 'dwójka';
      $scope.twoEO = 'duo';
       
      $scope.threeNumber = '3';       
      $scope.threePL = 'trójka';
      $scope.threeEO = 'trio';
       
      $scope.fourNumber = '4';     
      $scope.fourPL = 'czwórka';
      $scope.fourEO = 'kvaro';
        
      $scope.fiveNumber = '5';    
      $scope.fivePL = 'piątka';
      $scope.fiveEO = 'kvino';
       
      $scope.sixNumber = '6';       
      $scope.sixPL = 'szóstka';
      $scope.sixEO = 'seso';
      
      $scope.sevenNumber = '7';     
      $scope.sevenPL = 'siódemka';
      $scope.sevenEO = 'sepo';
      
      $scope.eightNumber = '8';       
      $scope.eightPL = 'ósemka';
      $scope.eightEO = 'oko';

      $scope.nineNumber = '9';      
      $scope.ninePL = 'dziewiętka';
      $scope.nineEO = 'naŭo';
      
      $scope.tenNumber = '10';      
      $scope.tenPL = 'dziesiątka';
      $scope.tenEO = 'deko';    

      $scope.elevenNumber = '11';       
      $scope.elevenEO = 'dek unuo';
      $scope.elevenPL = 'jedenastka';
 
      $scope.twentyNumber = '20';       
      $scope.twentyEO = 'dudeko';
      $scope.twentyPL = 'dwadziestka';
      
      $scope.twentyOneNumber = '21';    
      $scope.twentyOneEO = 'dudek uno';
      $scope.twentyOnePL = 'dwadziestka jedynka';
      
      $scope.oneHundredNumber = '100';     
      $scope.oneHundredEO = 'cento';
      $scope.oneHundredPL = 'setka';
      
      $scope.oneTousandNumber = '1000';
      $scope.oneTousandEO = 'milo'
      $scope.oneTousandPL = 'tysiąc'
    }   
   
    $scope.przyslowne = function() {
      
      $scope.zeroNumber = '0';          
      $scope.zeroPL = '-';
      $scope.zeroEO = 'nule';

      $scope.oneNumber = '1';      
      $scope.onePL = 'po pierwsze';
      $scope.oneEO = 'unue ';
  
      $scope.twoNumber = '2';    
      $scope.twoPL = 'po drugie';
      $scope.twoEO = 'due';
       
      $scope.threeNumber = '3';       
      $scope.threePL = 'po trzecie';
      $scope.threeEO = 'trie';
       
      $scope.fourNumber = '4';     
      $scope.fourPL = 'po czwarte';
      $scope.fourEO = 'kvari';
        
      $scope.fiveNumber = '5';    
      $scope.fivePL = 'po piąte';
      $scope.fiveEO = 'kvine';
        
      $scope.sixNumber = '6';      
      $scope.sixPL = 'po szóste';
      $scope.sixEO = 'sese';
      
      $scope.sevenNumber = '7';        
      $scope.sevenPL = 'po siódme';
      $scope.sevenEO = 'sepe';  
 
      $scope.eightNumber = '8';        
      $scope.eightPL = 'po óseme';
      $scope.eightEO = 'oke';

      $scope.nineNumber = '9';  
      $scope.ninePL = 'po dziewięte';
      $scope.nineEO = 'naŭe';
      
      $scope.tenNumber = '10';
      $scope.tenPL = 'po dziesiąte';
      $scope.tenEO = 'deke';    
      
      $scope.elevenNumber = '11';      
      $scope.elevenEO = 'dek unue';
      $scope.elevenPL = 'po jedenaste';
      
      $scope.twentyNumber = '20';       
      $scope.twentyEO = 'dudeke';
      $scope.twentyPL = 'po dwudzieste';
      
      $scope.twentyOneNumber = '21';      
      $scope.twentyOneEO = 'dudek unue';
      $scope.twentyOnePL = 'po dwadzieste pierwsze';
      
      $scope.oneHundredNumber = '100';
      $scope.oneHundredEO = 'cente';
      $scope.oneHundredPL = 'po setne';

      $scope.oneTousandNumber = '1000';         
      $scope.oneTousandEO = 'mile'
      $scope.oneTousandPL = 'po tysięczne'
    }
      
   $scope.mnozne = function() {
    
      $scope.zeroNumber = '1';    
      $scope.zeroPL = 'pojedynczy/a/e';
      $scope.zeroEO = 'unuobla';

      $scope.oneNumber = '1';
      $scope.onePL = 'jednokrotnie';
      $scope.oneEO = 'unuoble';

      $scope.twoNumber = '2';
      $scope.twoPL = 'pdwójny/a/e';
      $scope.twoEO = 'duobla';
      
      $scope.threeNumber = '2';       
      $scope.threePL = 'dwukrotnie';
      $scope.threeEO = 'duoble';
      
      $scope.fourNumber = '3';
      $scope.fourPL = 'potrójny/a/e';
      $scope.fourEO = 'triobla';
      
      $scope.fiveNumber = '3';
      $scope.fivePL = 'trzykrotnie';
      $scope.fiveEO = 'trioble';
      
      $scope.sixNumber = '4';       
      $scope.sixPL = 'poczwórny/a/e';
      $scope.sixEO = 'kvarobla';
     
      $scope.sevenNumber = '4';       
      $scope.sevenPL = 'czterokrotnie';
      $scope.sevenEO = 'kvaroble';  

      $scope.eightNumber = '5';    
      $scope.eightPL = 'poczwórny/a/e';
      $scope.eightEO = 'kvinobla';

      $scope.nineNumber = '5';     
      $scope.ninePL = 'pięciokrotnie';
      $scope.nineEO = 'kvinoble';

      $scope.tenNumber = '10';     
      $scope.tenPL = 'dzisięciokrotny/a/e';
      $scope.tenEO = 'dekobla';    

      $scope.elevenNumber = '10';      
      $scope.elevenPL = 'dziesięciokrotnie';
      $scope.elevenEO = 'dekoble';

      $scope.twentyNumber = '100';      
      $scope.twentyPL = 'stokrotny/a/e';
      $scope.twentyEO = 'centobla';

      $scope.twentyOneNumber = '100';        
      $scope.twentyOnePL = 'stokrotnie';
      $scope.twentyOneEO = 'centoble';

      $scope.oneHundredNumber = '1000';      
      $scope.oneHundredPL = 'tysiąckrotny/a/e';
      $scope.oneHundredEO = 'milobla';
 
      $scope.oneTousandNumber = '1000';       
      $scope.oneTousandPL = 'tysiąckrotnie';                    
      $scope.oneTousandEO = 'miloble';  
    }
     
    $scope.ulamkowe = function() {
      
      $scope.zeroNumber = '1/0';    
      $scope.zeroPL = '-';
      $scope.zeroEO = '-';

      $scope.oneNumber = '1/1';
      $scope.onePL = 'jeden';
      $scope.oneEO = 'unu';

      $scope.twoNumber = '1/2';
      $scope.twoPL = 'jedna druga';
      $scope.twoEO = 'duono';
      
      $scope.threeNumber = '1/3';       
      $scope.threePL = 'jedna trzecia';
      $scope.threeEO = 'triono';
      
      $scope.fourNumber = '1/4';
      $scope.fourPL = 'jedna czwarta';
      $scope.fourEO = 'kvarono';
      
      $scope.fiveNumber = '1/5';
      $scope.fivePL = 'jedna piąta';
      $scope.fiveEO = 'kvinono';
      
      $scope.sixNumber = '1/6';       
      $scope.sixPL = 'jedna szósta';
      $scope.sixEO = 'sesono';
     
      $scope.sevenNumber = '1/7';       
      $scope.sevenPL = 'jedna siódma';
      $scope.sevenEO = 'sepono';  

      $scope.eightNumber = '1/8';    
      $scope.eightPL = 'jedna ósma';
      $scope.eightEO = 'okono';

      $scope.nineNumber = '1/9';     
      $scope.ninePL = 'jedna dziewiąta';
      $scope.nineEO = 'naŭono';

      $scope.tenNumber = '1/10';     
      $scope.tenPL = 'jedna dziesiąta';
      $scope.tenEO = 'dekono';   
      
      $scope.elevenNumber ='2/3';
      $scope.elevenPL = 'dwie trzecie';
      $scope.elevenEO = 'du trinoj';

      $scope.twentyNumber = '4/5';    
      $scope.twentyPL = 'cztery piąte';
      $scope.twentyEO = 'kvar kvinonoj';

      $scope.twentyOneNumber =  '6/7';             
      $scope.twentyOnePL = 'sześć siódmych';
      $scope.twentyOneEO = 'ses seponoj';

      $scope.oneHundredNumber = '7/8';      
      $scope.oneHundredPL = 'siedem ósmych';
      $scope.oneHundredEO = 'sep okonoj';
 
      $scope.oneTousandNumber = '1/100';       
      $scope.oneTousandPL = 'jedna setna';                    
      $scope.oneTousandEO = 'centono'; 
   }   
      
   $scope.zbiorowe = function() {
      $scope.zeroNumber = '0';    
      $scope.zeroPL = '-';
      $scope.zeroEO = '-';
     
      $scope.oneNumber = '1';    
      $scope.onePL = 'pojedyńczo';
      $scope.oneEO = 'unuope';

      $scope.twoNumber = '2';
      $scope.twoPL = 'we dwójkę';
      $scope.twoEO = 'duope';

      $scope.threeNumber = '3';
      $scope.threePL = 'w trójkę';
      $scope.threeEO = 'triope';

      $scope.fourNumber = '4';
      $scope.fourPL = 'w czwórkę';
      $scope.fourEO = 'kvarope';
      
      $scope.fiveNumber = '5';
      $scope.fivePL = 'w piątkę';
      $scope.fiveEO = 'kvinope';
      
      $scope.sixNumber = '6';       
      $scope.sixPL = 'w szóstkę';
      $scope.sixEO = 'sesope';
     
      $scope.sevenNumber = '7';       
      $scope.sevenPL = 'w siódemkę';
      $scope.sevenEO = 'sepope';  

      $scope.eightNumber = '8';    
      $scope.eightPL = 'w ósemkę';
      $scope.eightEO = 'okope';

      $scope.nineNumber = '9';     
      $scope.ninePL = 'w dziewiątkę';
      $scope.nineEO = 'naŭope';

      $scope.tenNumber = '10';     
      $scope.tenPL = 'w dziesiątkę';
      $scope.tenEO = 'dekope';    

      $scope.elevenNumber = '11';      
      $scope.elevenPL = 'w jedenastkę';
      $scope.elevenEO = 'dek unuope';

      $scope.twentyNumber = '20';      
      $scope.twentyPL = 'w dwudziestkę';
      $scope.twentyEO = 'dudekope';

      $scope.twentyOneNumber = '30';        
      $scope.twentyOnePL = 'w trzydziestkę';
      $scope.twentyOneEO = 'tridekope';

      $scope.oneHundredNumber = '100';      
      $scope.oneHundredPL = 'setkami';
      $scope.oneHundredEO = 'centope';
 
      $scope.oneTousandNumber = '1000';       
      $scope.oneTousandPL = 'tysiącami';                    
      $scope.oneTousandEO = 'milope';  
    }
     
    $scope.ilorakie = function() {
      
      $scope.zeroNumber = '0';          
      $scope.zeroPL = '-';
      $scope.zeroEO = '-';

      $scope.oneNumber = '1';      
      $scope.onePL = 'jednokrotnie';
      $scope.oneEO = 'unufoje ';
  
      $scope.twoNumber = '2';    
      $scope.twoPL = 'dwuktornie';
      $scope.twoEO = 'dufoje';
       
      $scope.threeNumber = '3';       
      $scope.threePL = 'trzykrotnie';
      $scope.threeEO = 'trifoje';
       
      $scope.fourNumber = '4';     
      $scope.fourPL = 'czterokrotnie';
      $scope.fourEO = 'kvarfoje';
        
      $scope.fiveNumber = '5';    
      $scope.fivePL = 'pięciokrotnie';
      $scope.fiveEO = 'kvinfoje';
        
      $scope.sixNumber = '6';      
      $scope.sixPL = 'sześciokrotnie';
      $scope.sixEO = 'sesfoje';
      
      $scope.sevenNumber = '7';        
      $scope.sevenPL = 'siedmiokrotnie';
      $scope.sevenEO = 'sepfoje';  
 
      $scope.eightNumber = '8';        
      $scope.eightPL = 'ośmiokrotnie';
      $scope.eightEO = 'okfoje';

      $scope.nineNumber = '9';  
      $scope.ninePL = 'dziewięciokrotnie';
      $scope.nineEO = 'naŭfoje';
      
      $scope.tenNumber = '10';
      $scope.tenPL = 'dziesięciokrotnie';
      $scope.tenEO = 'dekfoje';    
      
      $scope.elevenNumber = '11';      
      $scope.elevenPL = 'jedenaście razy';
      $scope.elevenEO = 'po jedenaste';
      
      $scope.twentyNumber = '20';       
      $scope.twentyEO = 'dudekfoje';
      $scope.twentyPL = 'dwudziestokrotnie';
      
      $scope.twentyOneNumber = '21';      
      $scope.twentyOneEO = 'dudek unufoje';
      $scope.twentyOnePL = 'po dwadzieste pierwsze';
      
      $scope.oneHundredNumber = '100';
      $scope.oneHundredEO = 'centfoje';
      $scope.oneHundredPL = 'stukrotnie';

      $scope.oneTousandNumber = '1000';         
      $scope.oneTousandEO = 'milfoje';
      $scope.oneTousandPL = 'tysiąckrotnie';
    }
});


