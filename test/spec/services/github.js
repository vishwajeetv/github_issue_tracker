'use strict';

describe('Service: Github', function () {

  // load the service's module
  beforeEach(module('githubIssueTrackerApp'));

  // instantiate service
  var Github;
  beforeEach(inject(function (_Github_) {
    Github = _Github_;
  }));

  it('should do something', function () {
    expect(!!Github).toBe(true);
  });

    it('should retrieve issues ', function () {
        var issues;
        Github.getIssues().
        then(function(response)
            {
               issues = response;
                expect(issues.length).toBeGreaterThan(0);
            });
    });

});
