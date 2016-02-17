'use strict';

/**
 * @ngdoc function
 * @name githubIssueTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubIssueTrackerApp
 */
angular.module('githubIssueTrackerApp')
  .controller('MainCtrl', function ( $scope , Github) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      $scope.getGitHubIssues = function()
      {
          Github.getIssues().
          then(function(response)
              {
                  console.log(response)
              },
              function (response) {

              });
      }

      function init()
      {
          $scope.getGitHubIssues();
      }

      init();

  });
