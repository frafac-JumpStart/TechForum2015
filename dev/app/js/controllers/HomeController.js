/**
 * Home Controller
 */
app.controller('HomeController', ['$scope','DateService','ConferencesService','$state','$ionicPlatform',"$ionicPopup", function($scope,DateService,ConferencesService,$state,$ionicPlatform,$ionicPopup)
    {

        console.log('--- HomeController ---');

        var day1 = new Date(2015,6,02);
        var day2 = new Date(2015,6,03);
        var dayEnd = new Date(2015,6,03);
        var today = new Date();
        var todayShort = new Date(today.getFullYear(),today.getMonth(),today.getDate());

        $scope.current_day = {
            day : 2
        };
        $scope.scheduleConferences = [];
        $scope.nextSchedule = null;
        $scope.time = DateService.dateDiff(today,day1);

        /** Check a actual day **/
        if(DateService.compare(day1,todayShort) === 0 ){
            $scope.current_day.day = 1;
        }else if(DateService.compare(day2,todayShort) === 0 ){
            $scope.current_day.day = 2;
        }else if(DateService.compare(dayEnd,todayShort) === -1 ){
            $scope.current_day.day = 3;
        }else
            $scope.current_day.day = 0;


        /** Retrieve a conference in function of day and schedule to display a next conference **/
        $scope.getConf = function(){
            if (localStorage.getItem('conferences') === null) {
                ConferencesService.getLocalConferences().query(
                    function(data){
                        $scope.conferences = data;
                        $scope.scheduleConferences = ConferencesService.sortConferenceByStartByDay(data,$scope.current_day.day);
                        $scope.nextSchedule = DateService.nextSchedule($scope.scheduleConferences,today);
                        localStorage.setItem('conferences', JSON.stringify(data));
                    },
                    function(reason){
                    }
                );
            } else {
                $scope.conferences = JSON.parse(localStorage.getItem('conferences'));
                $scope.scheduleConferences = ConferencesService.sortConferenceByStartByDay($scope.conferences,$scope.current_day.day);
                $scope.nextSchedule = DateService.nextSchedule($scope.scheduleConferences,today);
            }
        };

        /** Redirection to detail conference **/
        $scope.viewConference = function(idConference){
            $state.go('tab.conference-detail',{conferenceId: idConference});
        };
    }]);