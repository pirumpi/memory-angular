game.controller('loaderController', function($scope, data, assets, Game, $location){
    $scope.progress = "0%";
    
    data.getData().then(function(manifest){
         assets.queue.loadManifest(manifest.data.images);
         Game.setNames(manifest.data.images);
         angular.forEach(manifest.data.sounds,function(sound){
             assets.queue.loadFile(sound);
         });
        
    });
    
    $scope.$on('fileLoaded', function(){
       console.log('files loaded'); 
        createjs.Sound.play("giraffe_es");
        setTimeout(function(){
            $scope.$apply(function(){
                $location.path('/language');
            });
        },1000);
    });
    
     $scope.$on('progress', function(t, e){
         $scope.$apply(function(){
             $scope.progress = Math.round(100*e.loaded);
         });
    });
});

game.controller('selectorController', function($scope){
  
});