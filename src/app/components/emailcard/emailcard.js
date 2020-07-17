(function(app) {
    'use strict';
  
    angular
      .module('BlankApp', ['ngResource', 'ngRoute', 'ngAnimate', 'ngMessages', 'ngAria', 'ngMaterial'])
      .config(routeConfig)
      .controller('BlankAppCtrl', BlankAppCtrl);
  
    routeConfig.$inject = ['$routeProvider'];
  
    function routeConfig($routeProvider, $locationProvider) {
      $routeProvider
        .when('/details', {
          templateUrl: 'details.html',
          controller: 'BlankAppCtrl',
          controllerAs: 'vm'
        })
       .otherwise({redirectTo: '/details'});;
    }
  
    
    BlankAppCtrl.$inject = ['$scope', '$mdDialog', '$mdToast', '$location'];
  
    function BlankAppCtrl($scope, $mdDialog, $mdToast, $location) {
      $scope.isFullScreen = false;
      $scope.toggleFullScreen = toggleFullScreen;
  
      function toggleFullScreen() {
        $scope.isFullScreen = !$scope.isFullScreen;
      }
  
      $(document).ready(function() {
        $('.slider').slider({
          full_width: true
        });
      });
    }
  }());