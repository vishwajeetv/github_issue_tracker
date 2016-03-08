'use strict';

/**
 * @ngdoc service
 * @name githubIssueTrackerApp.Github
 * @description
 * # Github
 * Service in the githubIssueTrackerApp.
 */
angular.module('githubIssueTrackerApp')
  .service('Github', function ( $http , $q ) {

      this.getOpenIssues = function(repoURL)
      {
          var url = 'https://api.github.com/repos/'+repoURL;
          var url = 'https://api.github.com/repos/Shippable/support';

          var deferred = $q.defer();


          $http.get(url).
          success(function (response, status) {
              deferred.resolve(response);
          }).
          error(function (data, status) {
              deferred.reject(data);
          });

          return deferred.promise;
      }

      this.getIssuesCreatedAfter = function(repoURL, date)
      {
          var url = 'https://api.github.com/repos/'+repoURL;

          var url = 'https://api.github.com/repos/Shippable/support/issues?since='+moment().subtract(1, 'days').format();

          var deferred = $q.defer();


          $http.get(url).
          success(function (response, status) {
              deferred.resolve(response);
          }).
          error(function (data, status) {
              deferred.reject(data);
          });

          return deferred.promise;
      }
      

  });
