// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic' ,'ngResource', 'techForum.filters']) //, 'google-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "views/layouts/tabs.html"
  })

  // Each tab has its own nav history stack:
  /** Tab Home **/
  .state('tab.home', {
          url: '/home',
          views: {
          'home-tab': {
                      templateUrl: 'views/partials/home.html',
                      controller: 'HomeController'
           }
        }
   })
  /** Tab Conference **/
  .state('tab.conferences', {
                url: '/conferences',
                views: {
                    'conferences-tab': {
                        templateUrl: 'views/partials/conferences.html',
                        controller: 'ConferencesController'
                    }
                }
    })
             /** Tab detail conference **/
            .state('tab.conference-detail', {
                url: '/conference/:conferenceId',
                views: {
                    'conferences-tab': {
                        templateUrl: 'views/partials/detail_conference.html',
                        controller: 'DetailConferenceController'
                    }
                }
            })
            /** Tab Agenda **/
            .state('tab.agenda', {
                url: '/agenda',
                views: {
                    'agenda-tab': {
                        templateUrl: 'views/partials/agenda.html',
                        controller: 'AgendaController'
                    }
                }
            })
            /** Tab Agenda - View conference by day and shedule to add in agenda **/
            .state('tab.agenda-conference-schedule', {
                url: '/agenda/conferences/:day/:schedule',
                views: {
                    'agenda-tab': {
                        templateUrl: 'views/partials/conference_by_schedule.html',
                        controller: 'ConferencesByScheduleController'
                    }
                }
            })
            /** Tab Agenda - detail conference in Agenda **/
            .state('tab.conference-detail-agenda', {
                url: '/conference-agenda/:conferenceId',
                views: {
                    'agenda-tab': {
                        templateUrl: 'views/partials/detail_conference.html',
                        controller: 'DetailConferenceController'
                    }
                }
            })
            /** Tab Access Map **/
            .state('tab.access', {
                url: '/access',
                views: {
                    'access-tab': {
                        templateUrl: 'views/partials/access_map.html',
                        controller: 'AccessController'
                    }
                }
            });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
