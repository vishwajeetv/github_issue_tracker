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

      this.getIssuesCreatedBefore = function(repoURL, date)
      {
          var url = 'https://api.github.com/repos/'+repoURL;

          //var url = 'https://api.github.com/search/q?repo=Shippable%2Fsupport&created:'+moment().subtract(7, 'days').format();


          var url = 'https://api.github.com/search?utf8=%E2%9C%93&q=repo:Shippable/support&created:<'+moment().subtract(1000, 'days').calendar()+'&type=Issues';
          var deferred = $q.defer();
          //
          //https://github.com/search?utf8=%E2%9C%93&q=repo%3Ashippable%2Fsupport+created%3A%3C2015-03-01&type=Issues&ref=searchresults
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
