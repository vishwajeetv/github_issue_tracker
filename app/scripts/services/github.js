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
          var url = 'https://api.github.com/repos/'+repoURL+'/issues?since='+moment().subtract(1, 'days').format();

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

      this.getIssuesCreatedBefore = function(repoURL, date)
      {
          var url = 'https://api.github.com/search/issues?q=repo:'+repoURL+' created:<'+moment().subtract(7, 'days').format('YYYY-MM-DD');
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

      this.getIssuesCreatedInBetween = function(repoURL, date)
      {
          var url = 'https://api.github.com/search/issues?q=repo:'+
              repoURL+' created:"'+moment().subtract(7, 'days').format('YYYY-MM-DD')+
              ' .. '+moment().subtract(1, 'days').format('YYYY-MM-DD')+'"';

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
