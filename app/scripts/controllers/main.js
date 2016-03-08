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

      $scope.totalNumberOfIssues = 0;
      $scope.totalNumberOfIssuesLastDay = 0;

      $scope.getGitHubIssues = function(url)
      {
          var repoURL = url.replace('http://github.com/','');
          repoURL = repoURL.replace('https://github.com/','');

          var repoURLLength = repoURL.length;
          if(repoURL[repoURLLength - 1] != '/')
          {
              repoURL = repoURL+'/';
          }

          Github.getOpenIssues(repoURL).
          then(function(response)
              {
                  console.log(response);
                  $scope.totalNumberOfIssues = response.open_issues_count;
              },
              function (response) {

              });

          Github.getIssuesCreatedAfter(repoURL).
          then(function(response)
              {
                  console.log(response);
                  $scope.totalNumberOfIssuesLastDay = response.length;
              },
              function (response) {

              });
      }


      function init()
      {

      }

      init();

  });
