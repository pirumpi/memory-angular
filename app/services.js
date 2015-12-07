game.factory('assets', function($rootScope){
   
    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.on("complete", function(){
        $rootScope.$broadcast('fileLoaded');
    }, this); 
    queue.on("progress", function(e){
        $rootScope.$broadcast('progress',e);
    }, this); 
    return {
        queue:queue,
        createjs: createjs
    };
});

game.factory('Game', function(){
    var info = {
        names:[],
        currentLevel:'',
        levels:['easy', 'medium', 'hard']
    };
    
    return {
        setNames: function(results){
            angular.forEach(results, function(item){
                info.names.push(item.id);
            });
        },
        setLevel: function(n){
            info.currentLevel = info.levels[n];
        }
    };
})

game.factory('data', function($http, $q){
    
    var get = function(url){
        
        var deferred = $q.defer();
        
        $http({ method: 'GET', url: url }).then(function successCallback(response) {
            deferred.resolve(response);
        }, function errorCallback(response) {
            deferred.reject(response);
        });
        
        return deferred.promise;
    }
    
    return {
        getData: function(){
            return get('/data/data.json');
        }
    };
    
});