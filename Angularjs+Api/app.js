var app = angular.module('app',[]);

app.controller('mainCtrl',function($scope,$http){

     $scope.search = function(username){
        $http.get("https://api.github.com/users/jfukki"   ).then(onUserComplete,     onError);
  
     };
    
    
    var onUserComplete = function(response){
        $scope.user = response.data;
        $http.get($scope.user.repos_url).then(onRepos,onError)
    };
    
    var onRepos = function(response){
    
        $scope.repos = response.data;
        
    };
    
    var onError = function(reason){
        
        $scope.error = "opps , Something went wrong...";
    };

})

 app.controller('test',function($scope, $http){
     $http.get("https://api.github.com/users/jfukki").success(function(data){
                $scope.data=data;
            })
 })
 
 app.controller('greet',function($scope,$http){
     
     $scope.submit = function(text){
         
     
     
      $http.get('https://api.github.com/users/' + text).
        success(function(data) {
            $scope.greeting = data;
        });
     
     }
 })
 
 
 app.controller('photo',function($scope, $http){
     $http.get("https://jsonplaceholder.typicode.com/photos").success(function(data){
                $scope.photo=data;
            })
 })
 
 app.controller('wp',function($scope, $http){
     $http.get("http://demo.wp-api.org/wp-json/wp/v2/media").success(function(data){
                $scope.wp=data;
            })
 })
 
 app.controller('quote',function($scope, $http){
     $http.get("http://quotesondesign.com/wp-json/posts").success(function(data){
        
                $scope.quote=data;
          
                  
         
            })
 })
// 
// 
// app.controller('wpCtrl',function($scope, $http){
//     $http.get("https://apppresser.com/wp-json/wp/v2/posts/49053?_embed").success(function(data){
//                $scope.wp=data;
//            })
// })
// 
// 
 
 
 
 
 .controller('countries',function($scope,$http){
     
      
     $scope.load = function(){
          
         
         
          $http.get("https://restcountries.eu/rest/v1/region/"+$scope.region_code).success(function(data){
        
                $scope.data=data;
          
                  
         
            });
     
     }
     
     
 })