/**
 * Access Controller
 */
angular.module('app')
    .controller('AccessController', ['$scope','$ionicLoading', function($scope,$ionicLoading)
    {
        console.log('--- AccessController ---');
        $scope.fromLilleFlandre = false;
        $scope.fromlesquin = false;

        /** display route to WorldLine by from **/
        $scope.displayFrom = function(from){
            if(from == 'lille'){
                var a = $scope.fromLilleFlandre ? $scope.fromLilleFlandre = false : $scope.fromLilleFlandre = true;
            }else if(from == 'lesquin'){
                var b = $scope.fromlesquin ? $scope.fromlesquin = false : $scope.fromlesquin =true;
            }else
                alert("Impossible to display From "+from);
        };

        /** Default Worldline Seclin GPS **/
        $scope.worldlineGPS ={
            latitude: 50.567593,
            longitude: 3.029413
        };
            
        $scope.getMyGps = function(){
            $ionicLoading.show();
            navigator.geolocation.getCurrentPosition(function(pos) {
                launchnavigator.navigate(
                    [$scope.worldlineGPS.latitude, $scope.worldlineGPS.longitude],
                    [pos.coords.latitude, pos.coords.longitude],
                    function(){
                        $ionicLoading.hide();
                        // alert("Plugin success");
                    },
                    function(error){
                        $ionicLoading.hide();
                        // alert("Plugin error: "+ error);
                    }
                );
            });
        };

    }]);