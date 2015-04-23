/**
 * DetailConference Controller
 */
angular.module('app')
    .controller('DetailConferenceController', ['$scope','$stateParams','ConferencesService','MessagesService','$ionicHistory','AgendaService','$ionicPopup','ConnectionService', function($scope,$stateParams,ConferencesService,MessagesService,$ionicHistory,AgendaService,$ionicPopup,ConnectionService)
    {
        console.log('--- DetailConferenceController ---');

        var idConference = $stateParams.conferenceId;
        var conferences = [];
        $scope.comments = [];
        $scope.conference = [];
        $scope.loadingComment = "loading...";
        $scope.showHideComment = 'show';
        $scope.newComment = {
            name : null,
            msg : null
        };

        /** Display conference description **/
        $scope.displayDescription = function(){
            if($scope.showHideComment == 'show'){
                $scope.showHideComment = 'hide';
            }else
                $scope.showHideComment = 'show';
        };

        /** Retrieve conference by id with $stateParam and display detail conference **/
        $scope.getConference = function(){
            ConferencesService.getLocalConferences().query(function(data){
                conferences = data;
                angular.forEach(data,function(conference , key) {
                    if (conference._id == idConference) {
                        $scope.conference = conference;
                    }
                });
            },function(reason){
                alert('Enable to retrieve a conference with id '+idConference);
            });
        };

        /** Return to conference list **/
        $scope.back =function(){
            $ionicHistory.goBack();
        };

        /** Add a conference in agenda **/
        $scope.addAgenda = function(id){

            if(localStorage.getItem("myAgenda") === null)
                AgendaService.addToAgenda(id);
            else{
                if(AgendaService.checkSameScheduleConferenceInAgenda(id,conferences) === false)
                    AgendaService.addToAgenda(id);
                else{
                    $ionicPopup.alert({
                        title: 'Impossible',
                        content: 'One conference already to add with the same to start'
                    });
                }
            }
        };
    }]);