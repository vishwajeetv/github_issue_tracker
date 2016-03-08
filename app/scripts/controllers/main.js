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

      $scope.totalNumberOfIssues = 0;
      $scope.totalNumberOfIssuesLastDay = 0;
      $scope.totalNumberOfIssuesSevenDaysAgo = 0;
      $scope.totalNumberOfIssuesInBetween = 0;

      function urlCleaner(url) {
          var repoURL = url.replace('http://github.com/', '');
          repoURL = repoURL.replace('https://github.com/', '');

          if (repoURL.substr(-1) === '/') {
              repoURL = repoURL.substr(0, repoURL.length - 1);
          }
          return repoURL;
      }

      $scope.getGitHubIssues = function(url)
      {
          var repoURL = urlCleaner(url);

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

          Github.getIssuesCreatedBefore(repoURL).
          then(function(response)
              {
                  console.log("issues created before 7 days");
                  console.log(response);
                  $scope.totalNumberOfIssuesSevenDaysAgo = response.total_count;
              },
              function (response) {

              });

          Github.getIssuesCreatedInBetween(repoURL).
          then(function(response)
              {
                  console.log("issues created in between last 7 days");
                  console.log(response);
                  $scope.totalNumberOfIssuesInBetween = response.total_count;
              },
              function (response) {

              });
      }


      function init()
      {

      }

      init();

  });
