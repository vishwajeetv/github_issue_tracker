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

      this.getIssues = function()
      {
          var url = 'https://api.github.com/repos/Shippable/support/issues';

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
